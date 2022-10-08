<?php
    function delectProduct($id){
        require_once ('./Model/dbCon.php');
        global $conn; 
        $query = "DELETE FROM products  WHERE id='".$id."'";
        mysqli_query($conn,$query);
        echo "<script> location.href = 'index.php';</script>";
    }
 ?>