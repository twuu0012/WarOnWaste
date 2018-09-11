<?php
if (!defined('ABSPATH')) {
    exit;
}
?>

<!DOCTYPE html>
<html>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        $(document).ready(function () {
            $("#test_1").click(function () {
                $("#title_1").fadeIn();
            });
            });
    </script>
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>


<div style="text-align: center">
    <button id="test_1" class="cal_button">Try It</button>
</div>

<br>
<div id="title_1" class="cal_title" style="display: none">Food Waste Calculator</div>

</html>