import "./DailyRow.scss";
import sunny from "../../assets/images/sunny.webp";

const DailyRow = () => {
  return (
    <div className="daily-row">
      <p className="daily-row__day">Day</p>
      <img src={sunny} alt="icon" />
      <p className="daily-row__low-high">10°-20°</p>
    </div>
  );
};
export default DailyRow;
