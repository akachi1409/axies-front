import "./filterItem2.css";

function FilterItem2(props){
    return(
        <div className="filteItem2-layout">
            <label className="label">{props.title}
                <input type="checkbox"/>
                <span className="mark"></span>
            </label>
            
        </div>
        
    )
}
export default FilterItem2;