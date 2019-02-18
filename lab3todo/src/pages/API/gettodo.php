<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:POST");

$dsn = "mysql:host=localhost;" . 
    "port=3306;dbname=ioniclab;" .
    "charset=utf8";
$pdo = new PDO($dsn,"root","");

$sqlcom = "SELECT * FROM lab_todo";
$stmt = $pdo->prepare($sqlcom);
$stmt->execute();
while($row = $stmt->fetch(PDO::FETCH_OBJ)){
    $data[] = $row;
}
echo json_encode($data);

?>