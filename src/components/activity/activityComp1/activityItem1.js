import "./activityItem1.css";

function ActivityItem1(props){
    return (
        <div className="activityItem1-layout">
            <div className="activityItem1-left">
                <img alt="" src={props.img} className="activityItem1-img1" style={{marginRight: "1em"}}/>
                <div>
                    <h3 className="activityItem1-title">{props.title}</h3>
                    <p className="activityItem1-description">{props.description}
                        <span className="activityItem1-author">{props.author}</span>
                    </p>
                    <p className="activityItem1-date">{props.date}</p>
                </div>
            </div>
            <div className="activityItem1-right">
                <img alt="" src={props.img1} className="activityItem1-img2"/>
            </div>
        </div>
    )
}

export default ActivityItem1;