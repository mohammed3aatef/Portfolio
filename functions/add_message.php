<?php

$conn = new mysqli('localhost', 'root', '', 'project');

extract($_POST);


$insert = "INSERT INTO messages(name , email , phone , message) VALUES('$name' , '$email' , '$phone' , '$message')";

$query = $conn->query($insert);

if ($query) {
    echo "Your Message Sent Successfully.";
}
