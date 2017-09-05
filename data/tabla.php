<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');



/*
// Conectando, seleccionando la base de datos
if (!$enlace = mysql_connect("127.0.0.1", "root", "contrasena")) {
    echo 'No pudo conectarse a mysql';
    exit;
}
*/

$enlace = mysqli_connect("127.0.0.1", "root", "contrasena","bd_inventarios");

/* comprobar la conexión */
if (mysqli_connect_errno()) {
    printf("Falló la conexión: %s\n", mysqli_connect_error());
    exit();
}

$consulta       = "SELECT id age, nombre nombre,  id_usuario correo FROM inven_catalogo_empresas order by id LIMIT  0, 20";  // LIMIT  10, 5

if ($resultado = mysqli_query($enlace, $consulta)) {
	 /* obtener el array asociativo */
	while ($fila = mysqli_fetch_object($resultado)) {
			    $dato[]= array(
	              "age"=>$fila->age,
	              "name"=>$fila->nombre,
	              "email"=>$fila->correo
	            );


			    //print_r($fila->age);
	}	

	//print_r($dato);

	   echo json_encode ( array(
        //"draw"            => intval( $data['draw'] ),
        //"recordsTotal"    => $registros_filtrados, 
        //"recordsFiltered" => $registros_filtrados, 
        "data"            =>  $dato,
        //"totales"            =>  array("pieza"=>intval( self::total_campos_salida_home($where_total)->pieza ), "metro"=>floatval( self::total_campos_salida_home($where_total)->metros ), "kilogramo"=>floatval( self::total_campos_salida_home($where_total)->kilogramos )),  
      )) ;

	/* liberar el conjunto de resultados */
	 mysqli_free_result($resultado);

}

/* cerrar la conexión */
mysqli_close($enlace);
?>