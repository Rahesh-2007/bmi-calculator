const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateButton = document.getElementById("calculateBtn");
const resetButton = document.getElementById("resetBtn");
const resultBox = document.getElementById("result");

calculateButton.addEventListener("click", calculateBMI);
resetButton.addEventListener("click", resetCalculator);

function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {
        resultBox.innerHTML =
            "<p>Please enter valid height and weight.</p>";

        resultBox.style.backgroundColor = "#fee2e2";
        resultBox.style.borderColor = "#fecaca";
        resultBox.style.color = "#b91c1c";

        return;
    }

    const heightInMetres = height / 100;

    const bmi =
        weight / (heightInMetres * heightInMetres);

    let category;

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultBox.innerHTML = `
        <h2>${bmi.toFixed(2)}</h2>
        <p>
            Your BMI category is
            <strong>${category}</strong>.
        </p>
    `;

    resultBox.style.backgroundColor = "#eff6ff";
    resultBox.style.borderColor = "#bfdbfe";
    resultBox.style.color = "#1f2937";
}

function resetCalculator() {
    weightInput.value = "";
    heightInput.value = "";

    resultBox.innerHTML =
        "<p>Your BMI result will appear here.</p>";

    resultBox.style.backgroundColor = "#eff6ff";
    resultBox.style.borderColor = "#bfdbfe";
    resultBox.style.color = "#475569";

    weightInput.focus();
}