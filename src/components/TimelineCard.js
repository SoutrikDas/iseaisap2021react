import { HashLink as Link } from 'react-router-hash-link';
import emptyimg from '../images/emptyimg.png'

const TimelineCard = ({ name, imgurl, worksAt, title, topic, bio, abstract, date,website }) => {
    return (
        // style="max-width: 540px;"
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-lg-4 text-center my-2 ">
                    <img src={imgurl ? imgurl : emptyimg} className="small-hidden img-fluid rounded-start border border-dark w-100"  style={{maxWidth:"100px",}} alt="..." />
                </div>
                <div className="col-lg-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column">
                        <p> <strong>Speaker: </strong>{name}</p>
                        <p className="card-text">{worksAt}</p>
                        <p> <strong>Title: </strong>{title}</p>
                    </div>
                    <a><Link to={"/program/keynotespeakers#"+name.split(" ").join("")}>Lets Hope this works</Link></a>
                    
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;