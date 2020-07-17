<?php
// database connection code
// // $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$conn = mysqli_connect('us-cdbr-east-02.cleardb.com', 'b1e2853f50dcd5', '819f8031','heroku_7408ac149c94f79');


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// get the post records
$email = filter_input(INPUT_POST, 'email');

// database insert SQL code
$sql = "INSERT INTO email VALUES (null, '$email')";

if($conn->query($sql)){
  $message = "You're All Set!";
echo "<script type='text/javascript'>alert('$message');</script>";

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