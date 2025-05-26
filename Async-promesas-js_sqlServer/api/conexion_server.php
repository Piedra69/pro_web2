<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    // DEPURAR ERRORES
    echo json_encode(["message" => "OPTIONS recibida"]);
    exit();
}

// SQL Server Connection con WPF
// string connectionString = "server=LAPTOP-NAM911L1\\SQLSERVER2025; 
// database=SistemaRestauranteA; INTEGRATED SECURITY=true; 
// Trusted_Connection=true; 
// TrustServerCertificate=true;";


// conexion a base de datos SQL Server
$serverName = "LAPTOP-NAM911L1\\SQLSERVER2025"; // Nombre del servidor (SQL Server de tu computadora)
$database = "bdSQLServer"; // Nombre de la base de datos 
$userName = "Presi"; // LAPTOP-NAM911L1\Presi
$password = "123"; // Contraseña

try {
    // Crear una cadena de conexión a la base de datos SQL Server
    $conn = new PDO("sqlsrv:server=$serverName; Database=$database", $userName, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo "Error de conexión: " . $e->getMessage();
    
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

try{
    switch ($method) {
        case 'GET':
            $id = $_GET['id'] ?? null;
            if ($id) {
                $stmt = $conn->prepare("SELECT * FROM clientes WHERE id = ?");
                $stmt->execute([$id]);
                $cliente = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $conn->query('SELECT * FROM clientes');
                $clientes = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            break;

        case 'POST':
            $input = json_decode(file_get_contents('php://input'), true);
            $id = $input['id'] ?? uniqid();
            $nombre = $input['nombre'];
            $email = $input['email'];
            $stmt = $conn->prepare("INSERT INTO clientes (id, nombre, email) VALUES (?, ?, ?)");
            $stmt->execute([$id, $nombre, $email]);
            break;

        case 'PUT':
            $input = json_decode(file_get_contents('php://input'), true);
            $id = $input['id'];
            $nombre = $input['nombre'];
            $email = $input['email'];
            $stmt = $conn->prepare("UPDATE clientes SET nombre = ?, email = ? WHERE id = ?");
            $stmt->execute([$nombre, $email, $id]);
            break;

        case 'DELETE':
            $id = $_GET['id'] ?? null;
            if ($id) {
                $stmt = $conn->prepare("DELETE FROM clientes WHERE id = ?");
                $stmt->execute([$id]);
            } else {
                http_response_code(400);
                echo json_encode(["message" => "ID no proporcionado"]);
            }
            break;
        default:
            http_response_code(405);
            echo json_encode(["message" => "Método no permitido"]);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Error: " . $e->getMessage()]);
} 

// Cerrar la conexión
$conn->close();

?>

