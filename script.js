const apiKey = '8b4c0429ec58609c7e4d47bbe0a3f9c5';
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const button = document.getElementById('botonBusqueda');
const cityNameInput = document.getElementById('ciudadEntrada');
const divDataWeather = document.createElement('datosClima');

const difKelvin = 273.15;

button.addEventListener('click',() => {
    const city = cityNameInput.value;
    if(city){
        fetchDataWeather(city);
    }
});

function fetchDataWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => console.log(response))
        ,then(response => showDataWeather(response));
}

function showDataWeather(data){
    divDataWeather.innerHTML='';
    const name = data.name;
    const temperature = data.main.temp;
    const descripcion = data.weather[0].description;
}