<?php

// Book Chapter 1: Classes, Objects and Functions.


    class Car {
        public $comp;
        public $color = "beige";
        public $hasSunRoof = true;

        public function hello(){
            return "beep";
        }
    }

    $bmw = new Car();
    $mercedes = new Car();

    $bmw->color = "blue";
    $mercedes->color = "green";

    $bmw->comp = "BMW";
    $mercedes->comp = "Mercedes Benz";

    echo $bmw->comp;
    echo "<br>";
    echo $mercedes->comp;
    echo "<br>";
    echo $bmw->hello();
    
?>