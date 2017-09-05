<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');


// Conectando, seleccionando la base de datos
$link = mysql_connect("127.0.0.1", "root", "contrasena")
    or die('No se pudo conectar: ' . mysql_error());
//echo 'Connected successfully';
mysql_select_db("bd_inventarios") or die('No se pudo seleccionar la base de datos');

// Realizar una consulta MySQL
$query = "SELECT id age, nombre nombre, codigo correo, direccion, id_usuario FROM inven_catalogo_empresas";
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

$data = array();

while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $data[] = json_encode($line);
    //echo json_encode($line);
    foreach ($line as $col_value) {
        
        //$data[] = $col_value;

    }
    
}

echo json_encode($data);


/*
// Imprimir los resultados en HTML
echo "<table>\n";
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
    echo "\t</tr>\n";
}
echo "</table>\n";
*/

// Liberar resultados
mysql_free_result($result);

// Cerrar la conexión
mysql_close($link);


?>