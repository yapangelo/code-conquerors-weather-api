import "./HomePage.scss";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

const HomePage = () => {
  const [city, setCity] = useState(" ");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "2ef909f5e4ac4005c0f84e8fbb7780d5";

  const handleSearch = async (cityName) => {
    setCity(cityName);
    try {
      //first
      const locationResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
      );
      const coordinates = locationResponse.data[0];

      //second
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,daily&appid=${apiKey}`
      );
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  let weatherDetails;
  if (weatherData) {
    weatherDetails = <WeatherDetails data={weatherData} city={city} />;
  } else {
    weatherDetails = null;
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {weatherDetails}
    </>
  );
};
export default HomePage;
