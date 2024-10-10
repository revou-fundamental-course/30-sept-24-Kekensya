document.getElementById('convert-btn').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 1.8) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('cara-kalkulasi').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('cara-kalkulasi').value = '';
});

document.getElementById('reverse-btn').addEventListener('click', function() {
    const tempCelsius = document.getElementById('celsius');
    const tempFahrenheit = document.getElementById('fahrenheit');
    const tempCalculation = document.getElementById('cara-kalkulasi');
    const tempLabelCelsius = document.getElementById('label-celsius');
    const tempLabelFahrenheit = document.getElementById('label-fahrenheit');

    if (tempCelsius.value && tempFahrenheit.value) {
       
        [tempCelsius.value, tempFahrenheit.value] = [tempFahrenheit.value, tempCelsius.value];

        // update cara-kalkulasi
        if (tempLabelCelsius.textContent === 'Celcius') {
            tempCalculation.value = `${tempCelsius.value}°F * (5/9) - 32 = ${tempFahrenheit.value}°C`;
        } else {
            tempCalculation.value = `${tempCelsius.value}°C * (9/5) + 32 = ${tempFahrenheit.value}°F`;
        }

        // Tukar  label

        [tempLabelCelsius.textContent, tempLabelFahrenheit.textContent] = [tempLabelFahrenheit.textContent, tempLabelCelsius.textContent];
    }
});

const conversionText = document.querySelector('p[style="color: rgb(255, 40, 40);font-size: 18px;"]');
const reverseButton = document.getElementById('reverse-btn');

reverseButton.addEventListener('click', () => {
    if (conversionText.textContent === 'Celcius ke Fahrenheit') {
        conversionText.textContent = 'Fahrenheit ke Celcius';
    } else {
        conversionText.textContent = 'Celcius ke Fahrenheit';
    }
});