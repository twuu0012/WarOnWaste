<?php
if (!defined('ABSPATH')) {
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Food Waste Calculator</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style type="text/css">
        #answer{
            padding: 30px;
            border: 5px;
            text-align: center;
            font-size: 20px;
        }

    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-3">

            </div>

            <div class="col-lg-6">
                <form method="post">

                    <label>How much would you pay for items per time? Such as Flours, Gums, Spice, etc.</label>
                    <input type="number" name="type1" placeholder="$" class="form-control" >
                    <br>
                    <label>How about Fruits and Vegetables?</label>
                    <input type="number" name="type2" placeholder="$" class="form-control" >
                    <br>
                    <label>And Meat?</label>
                    <input type="number" name="type3" placeholder="$" class="form-control" >
                    <br>
                    <label>How many times you usually go shopping for each week?</label>
                    <select name="week" class="form-control" >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                    <br>
                    <input type="submit" name="submit" value="Calculate" class="btn btn-success">
                    <input type="reset" name="clear" class="btn btn-danger">
                </form>
                <br>
                <div id="answer">
                    <?php
                    if (isset($_POST['submit'])){

                        $result1 = $_POST['type1'];
                        $result2 = $_POST['type2'];
                        $result3 = $_POST['type3'];
                        $week = $_POST['week'];

                        switch ($week){
                            case "1":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52);
                                $number2 = round(0.25 * ($result1 * 0.1 + $result2 * 0.05 + $result3 * 0.05) * 52);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                            case "2":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52 * 2);
                                $number2 = round(0.25 * ($result1 * 0.1 + $result2 * 0.05 + $result3 * 0.05) * 52 * 2);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                            case "3":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52 * 3);
                                $number2 = round(0.25 * ($result1 * 0.01 + $result2 * 0.05 + $result3 * 0.05) * 52 * 3);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                            case "4":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52 * 4);
                                $number2 = round(0.25 * ($result1 * 0.01 + $result2 * 0.05 + $result3 * 0.05) * 52 * 4);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                            case "5":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52 * 5);
                                $number2 = round(0.25 * ($result1 * 0.01 + $result2 * 0.05 + $result3 * 0.05) * 52 * 5);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                            case "6":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52 * 6);
                                $number2 = round(0.25 * ($result1 * 0.01 + $result2 * 0.05 + $result3 * 0.05) * 52 * 6);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                            case "7":
                                $number1 = round(0.25 * ($result1 + $result2 + $result3) * 52 * 7);
                                $number2 = round(0.25 * ($result1 * 0.01 + $result2 * 0.05 + $result3 * 0.05) * 52 * 7);
                                echo 'After calculating, Approximate food waste generated in a year = $'.$number1.
                                    '. Approximate food waste that could have been avoided= $'.$number2;
                                break;
                        }


                    }
                    ?>

                </div>

            </div>

            <div class="col-lg-3">

            </div>
        </div>
    </div>
</body>

</html>
