const form = document.querySelector('form');
const input = document.querySelector('#city');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.ariaValueMax;
}