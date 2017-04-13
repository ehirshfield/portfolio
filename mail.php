<?php
	$body = 'First Name: ' . $_POST['name'] . "\n" .
			'Email: ' . $_POST['email'] . "\n" .
			'Subject: ' . $_POST['subject'] . "\n" .
			'Message: ' . $_POST['message'];
	mail('ehirshfield@gmail.com', 'Submission from Site', $body);
	header('Location: thankyou.html');
?>
