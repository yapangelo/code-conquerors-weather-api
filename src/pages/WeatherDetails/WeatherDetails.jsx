import "./WeatherDetails.scss";
import WeatherDetailsContainer from "../../components/WeatherDetailsContainer/WeatherDetailsContainer";
import Hourly from "../../components/Hourly/Hourly";

const WeatherDetails = ({ data, city }) => {
  return (
    <>
      <div className="weather-details">
        <h4 className="weather-details__location">{city}</h4>
        <WeatherDetailsContainer data={data} />
        <h4 className="weather-details__subheader">Hourly</h4>
        <div className="weather-details__hourly-container">
          {data && data.hourly ? (
            data.hourly
              .slice(0, 12)
              .map((hour, index) => <Hourly key={index} hour={hour} />)
          ) : (
            <p>Loading hourly data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
