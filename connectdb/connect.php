$<?php
$servername = "localhost";
$username = "root";
$password = "";

$conn = new PDO("mysql:host=$servername;dbname=resume", $username, $password);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['fullname'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $job_type = $_POST['job_type'];

  $sql = "INSERT INTO `user` (fullname, email, password, job_type)
  VALUES ('$name', '$email', '$password', '$job_type')";
  
  // use exec() because no results are returned
  $conn->exec($sql);
  header('location: ../courses.php');
} 
?>