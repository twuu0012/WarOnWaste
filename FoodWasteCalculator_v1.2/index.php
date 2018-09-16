<?php

/*
Plugin Name: Food Waste Calculator V1.1
Plugin URI: https://www.winningthewaronwaste.tk
Description: ShortCode [Food-Waste-Calculator]
Version: 1.1
Author: Tony Wu
License: A "Slug" license name e.g. GPL2
*/

// User cannot access the plugin directly
if (!defined('ABSPATH')) {
    exit;
}

// Add short code for the plugin
function short_code() {
    include 'food-waste-calculator.php';
}

add_shortcode('Food-Waste-Calculator', 'short_code');

// Add the scripts
function add_all_scripts() {
    wp_enqueue_script('main', plugins_url('js/main_script.js', __FILE__ ),array(),'1.0.0',true);
    wp_enqueue_style( 'style', plugins_url( 'css/main_style.css', __FILE__ ));
}

add_action('wp_enqueue_scripts', 'add_all_scripts');
