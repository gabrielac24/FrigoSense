<?php
   $conexion = mysqli_connect("localhost", "root", "", "northwind");

   $resultado = mysqli_query($conexion, "select * from customers");

   $clientes = array();

   while($fila = $resultado->fetch_assoc()) {
    $clientes[] = array("nombre"=>$fila['CustomerName'], "direccion"=>$fila["Adress"],"ciudad"=>$fila["City"],
    "pais"=>$fila["Country"] );
   }

   mysql_close($conexion);

   print json_encode($resultado);
?>