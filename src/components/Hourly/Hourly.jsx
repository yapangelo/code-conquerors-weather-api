import "./Hourly.scss";

const Hourly = ({ hour }) => {
  const date = new Date(hour.dt * 1000);
  const rawHours = date.getHours();
  const hours = rawHours % 12 || 12;
  const ampm = rawHours < 12 ? "am" : "pm";
  const formattedTime = `${hours}${ampm}`;

  const celsiusTemp = Math.round(hour.temp - 273.15);
  const feelsLikeCelsius = Math.round(hour.feels_like - 273.15);
  const iconCode = hour.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="hourly">
      <h3 className="hourly__time">{formattedTime}</h3>
      <img src={iconUrl} alt="icon" className="hourly__icon" />
      <span className="hourly__temp">{celsiusTemp}°C</span>
      <p className="hourly__details">
        <span className="hourly__details hourly__details--bold">Feels</span>{" "}
        {feelsLikeCelsius}°C
      </p>
      <p className="hourly__details">{Math.round(hour.pop * 100)}%</p>
      <p className="hourly__details">
        <span className="hourly__details hourly__details--bold">Humidity:</span>{" "}
        {hour.humidity}%
      </p>
      <p className="hourly__details">
        <span className="hourly__details hourly__details--bold">Wind:</span>{" "}
        {hour.wind_speed} m/s
      </p>
    </div>
  );
};

export default Hourly;
