import "./Hourly.scss";
import sunny from "../../assets/images/sunny.webp";

const Hourly = ({ hour }) => {
  const date = new Date(hour.dt * 1000);
  const rawHours = date.getHours();
  const hours = rawHours % 12 || 12;
  const ampm = rawHours < 12 ? "am" : "pm";
  const formattedTime = `${hours}${ampm}`;

  const celsiusTemp = Math.round(hour.temp - 273.15);
  const feelsLikeCelsius = Math.round(hour.feels_like - 273.15);

  return (
    <div className="hourly">
      <h3 className="hourly__time">{formattedTime}</h3>
      <img src={sunny} alt="icon" className="hourly__icon" />
      <span className="hourly__temp">{celsiusTemp}°C</span>
      <p className="hourly__feels">Feels {feelsLikeCelsius}°C</p>
      <p className="hourly__pop">POP {Math.round(hour.pop * 100)}%</p>
      <p className="hourly__humidity">Humidity: {hour.humidity}%</p>
      <p className="hourly__wind">Wind: {hour.wind_speed} m/s</p>
    </div>
  );
};

export default Hourly;
