import "./button1.css";
import Goggle from "../../assets/basic/Icon-goggle.png";
import Facebook from "../../assets/basic/Icon-facebook.png";
function Button1 (props){
    return(
            <button className="button1-layout">
                {
                    props.option =="Google" && 
                    <span className="button1-title"><img src={Goggle} className="button1-img"/>Google</span>
                }
                {
                    props.option =="Facebook" && 
                    <span className="button1-title"><img src={Facebook} className="button1-img"/>Facebook</span>
                }
            </button>
    )
}
export default Button1;