// Button Click Event
$(".btn").click(function () {
    var displayText = $(".display").text();
    var newText = $(this).text();
    $(".display").text(displayText + newText);
})

// KeyPress Event
$(document).keypress(function (event) {
    var a = true;
    var b = isNaN(event.key);
    if (event.key == "Enter") {
        var result = $(".display").text().replace("\u00d7", "*");
        $(".display").text(eval(result));
        console.log(result);
    } else if (event.key == "*") {
        var displayText = $(".display").text();
        $(".display").text(displayText + event.key.replace("*", "\u00d7"));
    } else if (event.key == "*" || event.key == "/" || event.key == "-" || event.key == "+") {
        var displayText = $(".display").text();
        $(".display").text(displayText + event.key);
    } else if (a !== b) {
        var displayText = $(".display").text();
        $(".display").text(displayText + event.key);
    } else {
        console.log(event.key);
    }
})

// AC click Button
$(".ac").click(() => {
    $(".display").text("");
})

// Equal Button
$(".equal").click(() => {
    var result = $(".display").text().replace("\u00d7", "*");
    $(".display").text(eval(result));
    console.log(result);
})

// Deleting Errors and Changing font-size
setInterval(() => {
    var displayBox = $(".display").text();
    if ($(".display").text().length >= 12) {
        $(".display").css("font-size", "2rem");
    } else if ($(".display").text().length < 12) {
        $(".display").css("font-size", "4rem");
    }
    if ($(".dark-mode .calculator .display").text().length >= 9) {
        $(".dark-mode .calculator .display").css("font-size", "2rem");
    } else if ($(".display").text().length < 9) {
        $(".display").css("font-size", "4rem");
    }
    if ($(".display").text().length >= 1) {
        $(".ac").text("C")
    } else {
        $(".ac").text("AC")
    }
}, 1);

//Dark Mode
$(".fas").click(function () {
    $("body").toggleClass("dark-mode");
    $(".fas").toggleClass("fa-moon");
    $(".fas").toggleClass("fa-sun");
    $(".btn").toggleClass("no-border");
    $(".ac").toggleClass("no-border");
    $(".equal").toggleClass("no-border");
})