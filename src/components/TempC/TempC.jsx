import "./TempC.scss";

const TempC = ({ className }) => {
  return (
    <div className={`${className}`}>
      <span className="tempC__temp">15</span>
      <span className="tempC__degree">°C</span>
    </div>
  );
};
export default TempC;
