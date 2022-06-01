import "./input1.css";

function Input1(props){
    return(
        <input className="input-layout" placeholder={props.text} style={{margin:props.margin}}/>
    )
}
export default Input1;