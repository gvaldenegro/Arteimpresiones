<?php
	// $to = "sortega@ideatres.cl";
	$to = "ventas@arteimpresiones.cl";
	$name = $_REQUEST['name'];
	$subject = $_REQUEST['subject'];
	$email = $_REQUEST['email'];
	$phone = $_REQUEST['phone'];
	$message = $_REQUEST['message'];
	$headers = "From: $to"."\r\n".
		"Reply-To: $email";

	$name = isset($name) ? "Nombre: $name"."\r\n" : "";
	$subject = isset($subject) ? "Asunto: $subject"."\r\n" : "";
	$email = isset($email) ? "Email: $email"."\r\n" : "";
	$phone = isset($phone) ? "Telefono: $phone"."\r\n" : "";
	$message = isset($message) ? "Mensaje: $message"."\r\n" : "";

	$content = "$name $email $phone $subject $message";

	mail($to, "Correo enviado por la página web", $content, $headers);
?>