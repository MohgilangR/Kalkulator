document.addEventListener('DOMContentLoaded', () => {
    function appendValue(value) {
        const display = document.getElementById("display");
        if (display.value === "Error") {
            display.value = "";
        }
        display.value += value;
    }

    function clearDisplay() {
        document.getElementById("display").value = "";
        document.getElementById("display").placeholder = "0";
    }

    function calculate() {
        const display = document.getElementById("display");
        try {
            let result = eval(display.value);
            display.value = parseFloat(result.toFixed(8));
        } catch (e) {
            display.value = "Error";
        }
    }

    window.appendValue = appendValue;
    window.clearDisplay = clearDisplay;
    window.calculate = calculate;

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        const delay = button.getAttribute('data-animation-delay');
        if (delay) {
            button.style.animationDelay = delay;
        }
    });
});