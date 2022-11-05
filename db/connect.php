<?php
$host = "localhost";
$usename = "root";
$password = "";
$dbname = "hibeyo_db";

$conn = new mysqli($host , $usename , $password , $dbname);

if($conn -> connect_error){
    die ("Kết nối không thành công:".$conn -> connect_error);
}

?>