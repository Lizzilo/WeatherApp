const form = document.querySelector('form');
const input = document.querySelector('#city');
const weatherInfo = document.querySelector('#weather-info');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value;
    const apiKey= '7ddee7b2da9d1fddabdcc7a324387e61';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`';
    fetch(url)
    .then(respone => respone.json())
    .then(data => {
        const temp = data.main.temp;
        const desc = data.weather[0].description;
        weatherInfo.innerHTML = 'Temperature: ${temp}&deg;C<br>Conditions: ${desc}';
    })
    .catch(error => {
        console.log(error);
        weatherInfo.innerHTML = 'An error occured. Please try again';
    });
    
    });