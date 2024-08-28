import "./HomePage.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

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
        `https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=hourly,daily&appid=${apiKey}`
      );
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar />
      <Link to="city">
        <button>nav</button>
      </Link>

      {/* <div className="app">
        <SearchBar onSearch={handleSearch} />
      </div> */}
    </>
  );
};
export default HomePage;
