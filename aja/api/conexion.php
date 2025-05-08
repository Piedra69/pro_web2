<?php
// Cabecera para permitir acceso desde cualquier origen (CORS)
header("Access-Control-Allow-Origin: *");
// Cabecera para especificar los métodos HTTP permitidos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Cabecera para permitir ciertas cabeceras en las solicitudes
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Cabecera para indicar que la respuesta será en formato JSON
header("Content-Type: application/json; charset=UTF-8");
// Manejo de solicitudes OPTIONS (preflight de CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Respuesta exitosa para preflight
    http_response_code(200);
    // Termina la ejecución del script
    exit();
}
/* ********************************************** */
/* CONEXIÓN A LA BASE DE DATOS */
/* ********************************************** */

// Configuración del servidor de base de datos (local)
$servername = "localhost";
// Nombre de usuario de la base de datos
$username = "root";
// Contraseña de la base de datos (vacía en este caso)
$password = "";
// Nombre de la base de datos a utilizar
$dbname = "doguito_petshop";
// Crear nueva conexión MySQLi (orientada a objetos)
$conn = new mysqli($servername, $username, $password, $dbname);
// Verificar si hubo error en la conexión
if ($conn->connect_error) {
    // Código de respuesta HTTP 500 (Error interno del servidor)
    http_response_code(500);
    // Terminar script y devolver error en formato JSON
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
/* ********************************************** */
/* MANEJO DE LOS DIFERENTES MÉTODOS HTTP */
/* ********************************************** */
// Obtener el método HTTP utilizado en la solicitud
$method = $_SERVER['REQUEST_METHOD'];
// Evaluar el método HTTP recibido
switch ($method) {
    // CASO PARA CONSULTAS GET (Leer datos)
    case 'GET':
        // Obtener el parámetro 'id' de la URL si existe, sino null
        $id = $_GET['id'] ?? null;
        
        // Si se proporcionó un ID específico
        if ($id) {
            // Preparar consulta SQL con parámetro para evitar inyecciones
            $stmt = $conn->prepare("SELECT * FROM clientes WHERE id = ?");
            
            // Vincular parámetro (s = string)
            $stmt->bind_param("s", $id);
            
            // Ejecutar consulta
            $stmt->execute();
            
            // Obtener resultado de la consulta
            $result = $stmt->get_result();
            
            // Obtener fila como array asociativo
            $cliente = $result->fetch_assoc();
            
            // Devolver datos en formato JSON
            echo json_encode($cliente);
        } else {
            // Si no hay ID, consultar todos los clientes
            $result = $conn->query("SELECT * FROM clientes");
            
            // Array para almacenar resultados
            $clientes = [];
            
            // Recorrer cada fila de resultados
            while ($row = $result->fetch_assoc()) {
                // Agregar cada cliente al array
                $clientes[] = $row;
            }
            
            // Devolver todos los clientes en JSON
            echo json_encode($clientes);
        }
        break;
        
    // CASO PARA CREAR NUEVOS REGISTROS (POST)
    case 'POST':
        // Leer y decodificar el cuerpo JSON de la solicitud
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Obtener ID del input o generar uno nuevo
        $id = $input['id'] ?? uniqid();
        
        // Obtener nombre del cuerpo de la solicitud
        $nombre = $input['nombre'];
        
        // Obtener email del cuerpo de la solicitud
        $email = $input['email'];
        
        // Preparar consulta de inserción con parámetros
        $stmt = $conn->prepare("INSERT INTO clientes (id, nombre, email) VALUES (?, ?, ?)");
        
        // Vincular parámetros (todos strings - "sss")
        $stmt->bind_param("sss", $id, $nombre, $email);
        
        // Ejecutar consulta y verificar resultado
        if ($stmt->execute()) {
            // Código 201 (Creado exitosamente)
            http_response_code(201);
            
            // Mensaje de éxito con ID del nuevo cliente
            echo json_encode(["message" => "Cliente creado", "id" => $id]);
        } else {
            // Código 500 (Error del servidor)
            http_response_code(500);
            
            // Mensaje de error
            echo json_encode(["error" => "Error al crear cliente"]);
        }
        break;
        
    // CASO PARA ACTUALIZAR REGISTROS (PUT)
    case 'PUT':
        // Leer y decodificar el cuerpo JSON
        $input = json_decode(file_get_contents('php://input'), true);
        
        // Obtener ID del cliente a actualizar
        $id = $input['id'];
        
        // Obtener nuevo nombre
        $nombre = $input['nombre'];
        
        // Obtener nuevo email
        $email = $input['email'];
        
        // Preparar consulta de actualización
        $stmt = $conn->prepare("UPDATE clientes SET nombre = ?, email = ? WHERE id = ?");
        
        // Vincular parámetros
        $stmt->bind_param("sss", $nombre, $email, $id);
        
        // Ejecutar y verificar
        if ($stmt->execute()) {
            // Mensaje de éxito
            echo json_encode(["message" => "Cliente actualizado"]);
        } else {
            // Error 500 si falla
            http_response_code(500);
            echo json_encode(["error" => "Error al actualizar cliente"]);
        }
        break;
        
    // CASO PARA ELIMINAR REGISTROS (DELETE)
    case 'DELETE':
        // Obtener ID del parámetro en la URL
        $id = $_GET['id'];
        
        // Preparar consulta de eliminación
        $stmt = $conn->prepare("DELETE FROM clientes WHERE id = ?");
        
        // Vincular parámetro
        $stmt->bind_param("s", $id);
        
        // Ejecutar y verificar
        if ($stmt->execute()) {
            // Mensaje de éxito
            echo json_encode(["message" => "Cliente eliminado"]);
        } else {
            // Error 500 si falla
            http_response_code(500);
            echo json_encode(["error" => "Error al eliminar cliente"]);
        }
        break;
        
    // CASO POR DEFECTO PARA MÉTODOS NO SOPORTADOS
    default:
        // Código 405 (Método no permitido)
        http_response_code(405);
        
        // Mensaje de error
        echo json_encode(["error" => "Método no permitido"]);
}

// Cerrar conexión a la base de datos
$conn->close();
?>