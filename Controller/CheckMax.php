<?php 
    function checkMax(){
        require_once ('./Model/dbCon.php');
        $query="SELECT * from products";
        $result = mysqli_query($conn, $query);
        $rowcount=mysqli_num_rows($result); 
        if ($rowcount >= 12) {
        echo
        '<div class="alert alert-danger mb-0" role="alert">
                Max Limit!! Please Delete Some Old Products To Add New
        </div>';
        }
    }
?>

8%og0X6Er&BK*2Xg