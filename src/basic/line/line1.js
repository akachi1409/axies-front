import Line from "../../assets/basic/line.png";
import "./line1.css";
function Line1(props) {
  return (
    <div className="line-layout">
      <img src={Line} alt="" className="line"/>
      <h5 className="line-title">{props.title}</h5>
      <img src={Line} alt="" className="line"/>
    </div>
  );
}
export default Line1;
