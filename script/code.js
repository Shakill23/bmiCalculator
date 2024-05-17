function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        return;
    }

    var bmi = weight / ((height / 100) ** 2);

    document.getElementById('result').textContent = 'Your BMI is: ' + bmi.toFixed(2);
}
