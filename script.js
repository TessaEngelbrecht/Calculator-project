document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");

    // Function to update the display value
    function updateDisplay(value) {
        display.value += value;
    }

    // Clear button
    document.getElementById("clearButton").addEventListener("click", function () {
        display.value = '';
    });

    // Delete button
    document.getElementById("deleteButton").addEventListener("click", function () {
        display.value = display.value.slice(0, -1);
    });

    // Dot button
    document.getElementById("dotButton").addEventListener("click", function () {
        updateDisplay('.');
    });

    // Divide button
    document.getElementById("divideButton").addEventListener("click", function () {
        updateDisplay('/');
    });

    // Seven button
    document.getElementById("sevenButton").addEventListener("click", function () {
        updateDisplay('7');
    });

    // Eight button
    document.getElementById("eightButton").addEventListener("click", function () {
        updateDisplay('8');
    });

    // Nine button
    document.getElementById("nineButton").addEventListener("click", function () {
        updateDisplay('9');
    });

    // Multiply button
    document.getElementById("multiplyButton").addEventListener("click", function () {
        updateDisplay('*');
    });

    // Four button
    document.getElementById("fourButton").addEventListener("click", function () {
        updateDisplay('4');
    });

    // Five button
    document.getElementById("fiveButton").addEventListener("click", function () {
        updateDisplay('5');
    });

    // Six button
    document.getElementById("sixButton").addEventListener("click", function () {
        updateDisplay('6');
    });

    // Subtract button
    document.getElementById("subtractButton").addEventListener("click", function () {
        updateDisplay('-');
    });

    // One button
    document.getElementById("oneButton").addEventListener("click", function () {
        updateDisplay('1');
    });

    // Two button
    document.getElementById("twoButton").addEventListener("click", function () {
        updateDisplay('2');
    });

    // Three button
    document.getElementById("threeButton").addEventListener("click", function () {
        updateDisplay('3');
    });

    // Add button
    document.getElementById("addButton").addEventListener("click", function () {
        updateDisplay('+');
    });

    // Double Zero button
    document.getElementById("doubleZeroButton").addEventListener("click", function () {
        updateDisplay('00');
    });

    // Zero button
    document.getElementById("zeroButton").addEventListener("click", function () {
        updateDisplay('0');
    });

    // Equal button
    document.getElementById("equalButton").addEventListener("click", function () {
        display.value = eval(display.value);
    });
});
