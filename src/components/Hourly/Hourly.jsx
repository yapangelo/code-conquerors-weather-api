import "./Hourly.scss";
//import TempC from "../../components/TempC/TempC";
import sunny from "../../assets/images/sunny.webp";

const Hourly = () => {
  return (
    <div className="hourly">
      <h3 className="hourly__time">10am</h3>
      <img src={sunny} alt="icon" className="hourly__icon" />
    
      <p className="hourly__feels">Feels 13</p>
      <p className="hourly__pop">10%</p>
    </div>
  );
};
export default Hourly;
