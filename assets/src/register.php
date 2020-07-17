<?php
// database connection code
// // $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$conn = mysqli_connect('localhost', 'root', '','talent finder pre-registration');


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// get the post records
$email = filter_input(INPUT_POST, 'email');

// database insert SQL code
$sql = "INSERT INTO email VALUES (null, '$email')";

if($conn->query($sql)){
  echo "Email Updated";
}
else{
  echo "Error: " .$sql ."<br>".$conn->error;
}
$conn->close()

// insert in database 
// $rs = mysqli_query($conn, $sql);
// if($rs)
// {
// 	echo "Contact Records Inserted";
// }

?>