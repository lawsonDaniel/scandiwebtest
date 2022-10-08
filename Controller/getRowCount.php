<?php
    function getRowCount (){
        require_once ('./Model/dbCon.php');
        global $conn;
        $limit="SELECT * from products";
        $result = mysqli_query($conn, $limit);
        return mysqli_num_rows($result); 
    }
?>