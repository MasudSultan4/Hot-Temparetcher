const apiKey = `6298ac6bb77a0802a426ce6f6c53534c`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // console.log(url)
    // clear
    city.value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => displayTamperature(data))
}
const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}

const displayTamperature = temperature => {
    setInnerText('city',temperature.name)
    setInnerText('temperature',temperature.main.temp)
    setInnerText('condition',temperature.weather[0].main)

    // set icon 
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const idImg = document.getElementById('weather-icon');
    idImg.setAttribute('src',url)
    console.log(temperature)
}