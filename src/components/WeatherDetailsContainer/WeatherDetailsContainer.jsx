import "./WeatherDetailsContainer.scss";

const WeatherDetailsContainer = ({ data }) => {

const description = data.current.weather[0].description;
const feelsLike = data.current.feels_like ;
const uvi = data.current.uvi;
const icon = data.current.weather[0].icon;//icon code
let iconUrl;
if (icon) {
  iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
} else {
  iconUrl = null;
}
let temperature;
if (data) {
  temperature = data.current.temp;
} else {
  temperature = "N/A"; 
}


  return (
    <div className="weather-details-container">
        <img src={iconUrl} alt={description} className="weather-details-container__icon" />
        <span className="weather__temp">{temperature}</span> 
        <span className="weather__tempC-degree">°F</span>
      <div>
        <h3 className="weather-details-container__weather">
          {description}
        </h3>
        <p className="weather-details-container__feels">Feels like {feelsLike} F</p>
        <p className="weather-details-container__high-low">UVI: {uvi} </p>
      </div>
    </div>
  );
};
export default WeatherDetailsContainer;
