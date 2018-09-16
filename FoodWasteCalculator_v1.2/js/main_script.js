
$(document).ready(function () {

    $("#price").click(function () {
        var target1 = $('#' + $(this).attr('data-target'));
        $(".toggleDiv").not(target1).hide();

        // Reset weight
        $('#que_3').val('80 Liters');
        $('#que_4').val('');
        $('#answer2').hide();

        target1.fadeIn();

    });
    $("#weight").click(function () {
        var target2 = $('#' + $(this).attr('data-target'));
        $(".toggleDiv").not(target2).hide();

        //Reset Price
        $('#que_1').val("");
        $('#que_2').val("");
        $('#answer1').hide();

        target2.fadeIn();
    });

    $('.submit_button').click(function () {
        var num1 = $(".number_1").val();
        var num2 = $(".number_2").val();
        var result_monthly = num1 * num2 * 4 / 100;
        var result_yearly = result_monthly * 52;
        $('#answer1').text('Approximately, you may produce $' + result_monthly + ' food waste for a month, ' +
            'and $' + result_yearly + ' for a whole year.');
        $('#answer1').fadeIn();
    });
    
    $('.submit_button_2').click(function () {

        switch ($('#que_3').val()) {
            case '1':
                var num3 = 0.08;
                break;
            case '2':
                var num3 = 0.12;
                break;
            case '3':
                var num3 = 0.24;
                break;
            case '4':
                var num3 = 0.66;
                break;
        }
        var num4 = $('#que_4').val();
        var weight_monthly = num3 * 0.2 * 4 * num4 / 100;
        var weight_yearly = weight_monthly * 52;
        $('#answer2').text('If the bin was collected every week, you might produce ' + weight_monthly.toFixed(2) + ' tons food waste' +
            'for a month, and ' + weight_yearly.toFixed(2) + ' tons for a whole year.');
        $('#answer2').fadeIn();
    })

});

// $("#form1").validate({
//     rules:{
//         number_2:{
//             required: true,
//             range: [0,100],
//             integer: true,
//             message: {
//                 required: jQuery.validator.format("Please fill in the percentage"),
//                 range: jQuery.validator.format("Only 0-100 percent is acceptable"),
//                 integer: jQuery.validator.format("Please enter the whole number")
//             }
//         },
//         number_1:{
//             required: true,
//             min: 0,
//             integer: true,
//             message: {
//                 required: jQuery.validator.format("Please fill in the cost"),
//                 min: jQuery.validator.format("Please enter a positive number"),
//                 integer: jQuery.validator.format("Please enter the whole number")
//             }
//         },
//
//     }
// });

