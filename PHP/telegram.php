<?
$name = $_POST['name'];
$number = $_POST['number'];
$message = $_POST['message'];
$token = '5197319832:AAGtHpbgVHCN6aPCvqlvsequYsUUj5uKKYM';
$chat_id = '-769720506';


$arr = array(
    'Ismi:    ' => $name,
    'Raqami:  ' => $number,
    'Savoli yoki taklifi:   ' => $message,
);

foreach ($arr as $key => $value) :
    $text .= $key . $value . "%0A";
endforeach;
$telegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_emode=html&text={$text}", "r");


if($telegram):
    header('Location: /');
else:
    echo "Error";
endif;



?>

