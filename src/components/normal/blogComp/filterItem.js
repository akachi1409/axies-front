import "./filterItem.css"

function FilterItem(props){
    return(
        <div className="filterItem-layout">
            <h5 className="filterItem-title">{props.title}</h5>
        </div>
    )
}

export default FilterItem