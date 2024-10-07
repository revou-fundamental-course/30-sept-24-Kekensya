document.getElementById('convert-btn').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = (celsius * 1.8) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('cara-kalkulasi').value = `${celsius} C * (9/5) + 32 = ${fahrenheit.toFixed(2)} F`;
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('cara-kalkulasi').value = '';
});

document.getElementById('reverse-btn').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = (fahrenheit - 32) / 1.8;
    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('cara-kalkulasi').value = `${fahrenheit.toFixed(2)} F - 32 = ${celsius.toFixed(2)} C / (9/5)`;
});