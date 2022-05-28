import "./filterItem.css"

function FilterItem(props){
    return(
        <div className="filterItem-layout">
            <div className="filterItem-left">
                <img src = {props.img} alt = "" className="filterItem-img"/>
            </div>
            <div className="filterItem-right">
                <h5 className="filterItem-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default FilterItem