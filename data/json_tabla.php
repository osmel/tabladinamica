<?php
include_once("db_connect.php");
$sql = "SELECT id age, nombre nombre, codigo correo, direccion, id_usuario FROM inven_catalogo_empresas LIMIT 20";
$resultset = mysqli_query($conn, $sql) or die("database error:". mysqli_error($conn));
$data = array();
while( $rows = mysqli_fetch_assoc($resultset) ) {
$data[] = $rows;
}
echo json_encode($data);



////////////////////////////////////////////////////

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

$cityName = $data->cityName;

echo json_encode($cityName);
?>