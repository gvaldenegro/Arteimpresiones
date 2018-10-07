<?php
    $destino  = "ajimenez@asinfo.cl, ldaccarett@arteimpresiones.cl";
    $nombre   = $_POST["InputNombre"];
    $email    = $_POST["InputEmail"];
    $telefono = $_POST["InputTelefono"];
    $mensaje  = $_POST["InputComentario"];
    $contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    

    if(isset($_POST["InputNombre"]) && strlen($_POST["InputNombre"])>0) {
        if(isset($_POST["InputEmail"]) && strlen($_POST["InputEmail"])>0) {
            if(isset($_POST["InputComentario"]) && strlen($_POST["InputComentario"])>0) {

                mail($destino, "Formulario de Contacto wwww.arteimpresiones.cl", $contenido);
                header("location:..\gracias.html");                
             
    }}}
    
?>