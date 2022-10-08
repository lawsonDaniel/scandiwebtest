<?php 
require_once ('../Model/dbCon.php');
// get product from the form
$sku = $_POST['sku'];
$name = $_POST['pname'];
$price = $_POST['price'];
$type = $_POST['type'];
$typeattribute = $_POST['typeattribute'];

$query = "SELECT   *  from products";
global $conn; 
$result = mysqli_query($conn, $query);
$rowcount = mysqli_num_rows($result);
if ($rowcount < 12) //check if the products are already 12
{
    $query = "INSERT INTO products (sku,name,price,type,typeattribute) VALUES ('$sku','$name','$price','$type','$typeattribute') LIMIT 12";
    mysqli_query($conn, $query);
    $Message = 'Product Succesfully added';
    header("Location: ../index.php?Message={$Message}"); //once the query is executed it redirects 
    
}
else
{
    printf("Result set has %d rows.\n", $rowcount);
    
    $Message = 'an error occured';
    header("Location:  ../index.php?Message={$Message}");

}

    
?>