import "./WeatherDetailsContainer.scss";
import TempC from "../../components/TempC/TempC";
import sunny from "../../assets/images/sunny.webp";

const WeatherDetailsContainer = () => {
  return (
    <div className="weather-details-container">
      <img src={sunny} alt="icon" className="weather-details-container__icon" />
      <TempC className={"tempc"} />
      <div>
        <h3 className="weather-details-container__weather">Mostly Cloudy</h3>
        <p className="weather-details-container__feels">Feels like 13</p>
        <p className="weather-details-container__high-low">H: 22° L:14°</p>
      </div>
    </div>
  );
};
export default WeatherDetailsContainer;
