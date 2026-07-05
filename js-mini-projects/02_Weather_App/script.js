document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById('city-input');
    const getWeather_button = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const tempDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');

    const API_KEY = "YOUR_KEY_HERE" //env variable

    getWeather_button.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;

        // web req -> 1. It may throw an error,
        // 2. Server/database is always in another continent

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }

    });

    async function fetchWeatherData(city){
        //need node env or window env of browser, js was never designed to make http requests
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        console.log(typeof response, response);

        if(!response.ok){
            throw new Error("City not found.")
        }
        const data = await response.json();
        return data;
        
    }

    function displayWeatherData(weatherData) {
        console.log(weatherData);
        const {name, main, weather} = weatherData;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
        cityNameDisplay.textContent = name;
        tempDisplay.textContent = `Temperature : ${main.temp}`; 
        descriptionDisplay.textContent = `Weather : ${weather[0].description}`
    }

    function showError(){
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }

})