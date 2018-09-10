<?php
/*
Plugin Name: FoodWasteCalculator
Plugin URI: https://www.winningthewaronwaste.tk
Description: Calculate the food waste worth. Short Code is [Food-Waste-Calculator]
Version: 1.0
Author: Tony Wu
Author URI: https://www.facebook.com/profile.php?id=100014524992822
License: A "Slug" license name e.g. GPL2
*/

if (!defined('ABSPATH'))
{
    exit;
}

function food_waste_calculator(){
    include 'food_waste_calculator.php';
}

add_shortcode('Food-Waste-Calculator', 'food_waste_calculator');
//
//function fwc_add_scripts() {
//
//    wp_enqueue_scripts('')
//
//}