<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>IonicCamera Upload image lab</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
</head>
<body>
    <h1>Ionic Image Upload.</h1>
    <?php
        $scan = scandir('uploads');
        foreach($scan as $file){
            if(!is_dir($file)){
                echo '<h3>'.$file.'</h3>';
                echo '<img src="uploads/'.$file.' style=width: 400px;"/><br/>';
            }
        }
    ?>
</body>
</html>