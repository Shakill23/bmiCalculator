function calculateBMI(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    var message = getFunnyMessage(bmi);

    document.getElementById('result').textContent = 'Your BMI is: ' + bmi.toFixed(2) + '. ' + message;
}

function getFunnyMessage(bmi) {
    if (bmi < 18.5) {
        return "You're a featherweight! Time to bulk up!";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "You're in the perfect zone! Keep it up!";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Getting a little cuddly there! How about a jog?";
    } else if (bmi >= 30) {
        return "Whoa! You're in the heavyweight class! Let's hit the gym!";
    } else {
        return "BMI is out of range. Are you from another planet?";
    }
}
