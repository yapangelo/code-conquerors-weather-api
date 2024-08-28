import "./WeatherDetails.scss";
import WeatherDetailsContainer from "../../components/WeatherDetailsContainer/WeatherDetailsContainer";
import Hourly from "../../components/Hourly/Hourly";

const WeatherDetails = ({ data, city }) => {
  return (
    <>
      <div className="weather-details">
        <h4 className="weather-details__location">{city}</h4>
        <WeatherDetailsContainer />
        <h4 className="weather-details__subheader">{data.current.temp}</h4>
        <div className="weather-details__hourly-container">
          <Hourly />
        </div>
      </div>
    </>
  );
};
export default WeatherDetails;
