<?php 

$a = [1,2,3];

// var_dump($a);

// var_export($a);
// var_export($a);
// var_export($a);


/* --------- PHP Data Types --------- */
/*
- String - A string is a series of characters surrounded by quotes
- Integer - Whole numbers
- Float - Decimal numbers
- Boolean - true or false
- Array - An array is a special variable, which can hold more than one value
- Object - A class
- NULL - Empty variable
- Resource - A special variable that holds a resource
*/

/* --------- Variable Rules --------- */
/*
- Variables must be prefixed with $
- Variables must start with a letter or the underscore character
- variables can't start with a number
- Variables can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variables are case-sensitive ($name and $NAME are two different variables)
*/

$name = 'Rameez';
$age = 34;

// echo "${name} is ${age} old.";

// define('HOST', 'localhost');

// echo HOST;exit;

$numbers = [1,55,22];
$fruits = array( 'one' => 'apple', 'two' => 'orange', 'three' => 'pear');

// print_r($fruits['one']);exit;

$people = [
    [
        'name' => 'Rameez',
        'email' => 'xrkalix@gmail.com',
        'age' => '34',
    ],
    [
        'name' => 'Bhatti',
        'email' => 'xrkalix@gmail.com',
        'age' => '34',
    ],
    [
        'name' => 'Marius',
        'email' => 'xrkalix@gmail.com',
        'age' => '34',
    ],
];

// echo $people[1]['email'];

// $age = 17;

// if($age >= 18){
//     echo "He is $age years old.";
// }
// else {
//     echo "Sorry, you are just $age";
// }


// exit;

// print_r($people);exit;

// $date = date('d');
// $date = date('m');
// $date = date('y');
// $date = date('l');

// $date = date('y/m/d');

// $date = date('h');
// $date = date('i');
// $date = date('s');
// $date = date('a');

// date_default_timezone_set('Asia/Karachi');

// $date = date('h:i:sa'); 

// echo $date;

// $timestamp = mktime(10, 14, 54, 01, 23, 1988);
// $date = date('Y/m/d h:i:s a', $timestamp);

// echo $date;

// $timestamp2 = strtotime('7:20:35 AM January 23, 1989');
// $timestamp3 = strtotime('tomorrow');
// $timestamp3 = strtotime('next Sunday');
// $timestamp3 = strtotime('+2 days');
// $date3 = date('Y/m/d h:i:s a', $timestamp3);

// echo time();

// $current_time = time();
// echo date('m/d/Y', $current_time).'<br />';

// // echo date('m/d/Y', $current_time + 5 * 24 * 60 * 60);
// echo date('m/d/Y', $current_time - 1 * 24 * 60 * 60);

$dateTime = new DateTime();

print_r($dateTime);




exit;

// echo $date3;

// exit;

?>



		



<html>

<head>
    <title>PHP Practice</title>
</head>

<body>
    <h1></h1>
</body>

</html>
