import "./checkbox1.css";

function Checkbox1(props){
    return(
        <div className="checkbox1-layout">
            <label className="label">{props.title}
                <input type="checkbox"/>
                <span className="mark"></span>
            </label>
            
        </div>
        
    )
}
export default Checkbox1;