function calc() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = document.getElementById("opr").value.trim();

    if (isNaN(num1) || isNaN(num2)) {
        displayError("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                displayError("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            displayError("Invalid operator. Please use +, -, *, or /.");
            return;
    }

    document.getElementById("display").value = result; 
}

function displayError(message) {
    document.getElementById("display").value = message; 
}
