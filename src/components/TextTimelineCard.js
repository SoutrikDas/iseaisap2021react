import emptyimg from '../images/emptyimg.png'

const TextTimelineCard = ({ title, imgurl, name, desc }) => {
    return (
        // style="max-width: 540px;"
        <div className="card mb-3" >
            <div className="">
                {/* <div className="col-md-3 m-1">
                    <img src={imgurl ? imgurl : emptyimg} className="img-fluid rounded-start" alt="..." />
                </div> */}
                <div className="">
                    <div className="card-body">
                        <p className="card-title ">{title}</p>
                        <p className="card-text"><small>Talk By <strong>{name}</strong> : {desc}</small></p>
                        {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TextTimelineCard;