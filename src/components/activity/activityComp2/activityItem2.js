import "./activityItem2.css"

function ActivityItem2 (props) {
    return(
        <div className="activityItem2-layout">
            <div className= "activityItem2-left">
                <img src = {props.img} alt = "" className= "activityItem2-image" />
            </div>
            <div className = "activityItem2-right">
                <h4 className= "activityItem2-title">{props.title}</h4>
                <p className= "activityItem2-author-text">{props.authorText+ " "}
                    <span className= "activityItem2-author">{props.author}</span>
                </p>
                <p className= "activityItem2-date">{props.date}</p>
            </div>
        </div>
    )
}

export default ActivityItem2;