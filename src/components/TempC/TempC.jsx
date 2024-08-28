import "./TempC.scss";

const TempC = ({ className, data }) => {
  return (
    <div className={`${className}`}>
      {/* <span className="tempC__temp">{data.current.temp}</span> */}
      <span className="tempC__degree">°C</span>
    </div>
  );
};
export default TempC;
