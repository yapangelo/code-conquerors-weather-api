import "./WeatherDetails.scss";
import { Link } from "react-router-dom";
import WeatherDetailsContainer from "../../components/WeatherDetailsContainer/WeatherDetailsContainer";
import Hourly from "../../components/Hourly/Hourly";

const WeatherDetails = () => {
  return (
    <>
      <form action="" className="location">
        <input type="text" className="location__input" placeholder="location" />
      </form>
      <div className="weather-details">
        <h4 className="weather-details__location">Vancouver, BC</h4>
        <WeatherDetailsContainer />
        <h4 className="weather-details__subheader">Hourly</h4>
        <div className="weather-details__hourly-container">
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
          <Hourly />
        </div>
      </div>
      <Link to="/" className="temporary">
        <button>nav</button>
      </Link>
    </>
  );
};
export default WeatherDetails;
