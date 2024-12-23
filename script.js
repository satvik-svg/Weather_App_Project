const apikey = "15ba5d415b8dec2aeb1a62daf91f654b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const button = document.querySelector(".button");
const inputw = document.querySelector(".input");


button.addEventListener("click", () => {
  checkweather(inputw.value);
})
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.temp + "5";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
  let image = document.querySelector(".image");
  if (data.weather[0].main == "Clouds") {
    image.src = "image/clouds.png";
  }
  if (data.weather[0].main == "Clear") {
    image.src = "image/clear.png";
  } if (data.weather[0].main == "Drizzle") {
    image.src = "image/drizzle.png";
  } if (data.weather[0].main == "Mist") {
    image.src = "image/mist.png";
  } if (data.weather[0].main == "Snow") {
    image.src = "image/snow.png";
  } 
  document.querySelector(".main").style.display="block";

}