<?php
require '../db/connect.php';
if (isset($_POST['bnt-sig'])) {

    $fullname = $_POST['fullname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    
    if (!empty($fullname) && !empty($username) && !empty($password) && !empty($phone) && !empty($address)) {
        echo "<pre>";
        print_r($_POST);

        $sql = "INSERT INTO `sigin_db` (`fullname` , `username` , `password` , `phone` , `address`) VALUES(' $fullname','$username','$password',
        '$phone','$address') ";
        if($conn->query($sql)===TRUE){
            echo "Lưu dữ liệ thành công";
        }else{
            echo "Lỗi {$sql}" .$conn->error;
        }

    } else {
        echo "Bạn cần điền đầy đủ thông tin trước khi đăng kí";
    }
}
?>
