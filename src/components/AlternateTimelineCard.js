import { HashLink as Link } from 'react-router-hash-link';
import emptyimg from '../images/emptyimg.png'

const AlternateTimelineCard = ({ name, imgurl, worksAt, title, topic, bio, abstract, date,website }) => {
    return ( 
        <div className="shadow rounded pb-4 text-start mb-md-5 my-3 container-fluid border-start border-dark border-5">
            <div className="row text-start p-1 mb-md-5 mb-1 bg-dark text-light">
                <h6 className="fs-5">{title}</h6>
            </div>
            <div className="row my-md-2 mt-md-5 my-1 ">
                <div className="col-md-4 text-center my-2">
                    <img className="img-fluid border border-dark border-3 my🈹  " src={imgurl ? imgurl : emptyimg} alt="" />
                </div>
                <div className="col-md-8 my-2 text-start ">
                    <p>
                        <strong>Speaker: {name}</strong>
                        <br/>
                        {worksAt}
                        <br/>
                        <strong>Title</strong> : {topic}
                        <br/>
                        <a className="text-decoration-none"><Link to={"/program/keynotespeakers#"+name.split(" ").join("")}>Click to see Abstract and Speaker Bio</Link></a>
                    </p>

                </div>
            </div>
        
        
        </div>
     );
}
 
export default AlternateTimelineCard;