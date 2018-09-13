<?php
/*
Plugin Name: Chemical Waste Map
Description: Short Code [chemical-waste-map]
Version: 1.0
Author: Tony Wu
License: A "Slug" license name e.g. GPL2
*/

if (!defined('ABSPATH')) {
    exit;
}

function include_php_file() {
    include 'chemical-waste-map.php';
}

add_shortcode('chemical-waste-map', 'include_php_file');

function cwm_scripts(){
    wp_enqueue_script('main', plugins_url('js/main.js', __FILE__ ),array(),'1.0.0',true);
    wp_enqueue_style( 'style', plugins_url( 'css/style.css', __FILE__ ));
}


add_action( 'wp_enqueue_scripts', 'cwm_scripts' );
