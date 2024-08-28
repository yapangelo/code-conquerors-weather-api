import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WeatherDetails from "./pages/WeatherDetails/WeatherDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/City" element={<WeatherDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
