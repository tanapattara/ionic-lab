<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:POST");

$dsn = "mysql:host=localhost;" . 
    "port=3306;dbname=ioniclab;" .
    "charset=utf8";
$option = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    PDO::ATTR_EMULATE_PREPARES => false
);
$pdo = new PDO($dsn,"root","",$option);

$json = file_get_contents('php://input');
$obj = json_decode($json);
$payment = filter_var($obj->payment, 
    FILTER_SANITIZE_NUMBER_INT);
$type = filter_var($obj->type, 
    FILTER_SANITIZE_NUMBER_INT);

//insert to database
$sqlcom = "INSERT INTO lab_wallet (payment) 
    VALUES (:payment)";

$stmt = $pdo->prepare($sqlcom);
$stmt->bindParam(':payment', $payment,PDO::PARAM_INT);
$stmt->execute();

?>