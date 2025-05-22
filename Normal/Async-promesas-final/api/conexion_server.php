<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
$serverName='MATEO';
$database='doguito';
$username='sa';
$password='1234$';   
try {
    $conn = new PDO("sqlsrv:server=$serverName;Database=$database", $username, $password);  
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error"=>"conexion fallida:"]);
    exit();
}
$metodo= $_SERVER['REQUEST_METHOD'];
try{
    switch($metodo){
        case 'GET':
            $id = $_GET['id'] ?? null;
            if($id){
                $stmt = $conn->prepare('SELECT * FROM clientes WHERE id=?');
                $stmt->execute([$id]);
                $cliente=$stmt->fetch(PDO::FETCH_ASSOC);
                echo json_encode($cliente);
            }else{
                $stmt=$conn->query('SELECT * FROM clientes');
                $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($clientes);
            }
            break;
        case 'POST':
            $input= json_decode(file_get_contents('php://input'),true);
            $id=$input['id'] ?? uniqid();
            $nombre=$input['nombre'];
            $email=$input['email'];
            $stmt=$conn->prepare('INSERT INTO clientes (id,nombre,email) values (?,?,?)');
            if($stmt->execute([$id,$nombre,$email])){
                http_response_code(200);
                echo json_encode(["message"=>"Cliente Creado","id"=>$id]);
            }else{
                http_response_code(500);
                echo json_encode(["error"=>"Error al crear el cliente"]);
            }
            break;
            case 'PUT':
                $input= json_decode(file_get_contents('php://input'),true);
                $id=$input['id'];
                $nombre=$input['nombre'];
                $email=$input['email'];
                $stmt=$conn->prepare('UPDATE clientes SET nombre=?, email=? WHERE id=?');
                if($stmt->execute([$nombre,$email,$id])){
                    http_response_code(200);
                    echo json_encode(["message"=>"Cliente Actualizado"]);
                }else{
                    http_response_code(500);
                    echo json_encode(["error"=>"Error al actualizar el cliente"]);
                }
                break;
            case 'DELETE':      
                $id = $_GET['id'] ?? null;
                if($id){
                    $stmt=$conn->prepare('DELETE FROM clientes WHERE id=?');
                    if($stmt->execute([$id])){
                        http_response_code(200);
                        echo json_encode(["message"=>"Cliente Eliminado"]);
                    }else{
                        http_response_code(500);
                        echo json_encode(["error"=>"Error al eliminar el cliente"]);
                    }
    }
    
}
catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error"=>"Error en la consulta: ".$e->getMessage()]);
}
}
catch(Exception $e) {
    http_response_code(500);
    echo json_encode(["error"=>"Error inesperado: ".$e->getMessage()]);
}
finally {
    $conn = null; // Cierra la conexión
}

?>