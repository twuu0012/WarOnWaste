<?php
if (!defined('ABSPATH')) {
    exit;
}
?>

<!DOCTYPE html>

<html>

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
    <link rel="stylesheet" href="css/main_style.css">

</head>
<body>
    <div class="part1">
        <h4>Which Aspect Of The Waste You Generated Monthly Do You Wonder?</h4>
        <div class="cal_buttons">
            <button id="price" class="price_button" data-target="div1">Price</button>
            <button id="weight" class="weight_button" data-target="div2">Weight</button>
        </div>
    </div>

    <br>
    <div class="container" style="text-align: center">
        <div id="div1" class="toggleDiv" style="display: none">
            <div id="form1">
                <p></p>
                <label>How Much Did You Pay For The Grocery Each Week Approximately?</label>
                <br>
                <p></p>
                <input type="number" name="input_1" class="number_1" id="que_1" placeholder="$">
                <br>
                <p></p>
                <label>Estimate Percentage Of those Food You Might Throw Away?</label>
                <br>
                <p></p>
                <input type="number" name="input_2" class="number_2" id="que_2" placeholder="%">
                <br>
                <p></p>
                <button class="submit_button">Submit</button>
            </div>
            <p></p>
            <div id="answer1" style="display: none; font-family: Arial; font-size: 20px; color: orangered; font-weight: bold"></div>
        </div>

        <div id="div2" class="toggleDiv" style="display: none">
            <div id="form2">
                <p></p>
                <label>What Is The Size Of Your General Waste Bin?</label>
                <br>
                <p></p>
                <select id="que_3">
                    <option value="1">80 Liters</option>
                    <option value="2">120 Liters</option>
                    <option value="3">240 Liters</option>
                    <option value="4">660 Liters</option>
                </select>
                <br>
                <p></p>
                <label>Estimate Percentage Of Food Waste In General Waste By Volume?</label>
                <br>
                <p></p>
                <input type="number" id="que_4" placeholder="%">
                <br>
                <p></p>
                <button class="submit_button_2">Submit</button>

            </div>
            <p></p>
            <div id="answer2" style="display: none; font-family: Arial; font-size: 20px; color: orangered; font-weight: bold"></div>
        </div>

    </div>

</body>

</html>