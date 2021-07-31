import emptyimg from '../images/emptyimg.png'

const TimelineCard = ({title, imgurl, name, desc}) => {
    return ( 
        <div>
            <div className="row g-0 shadow">
                <div className="col-md-4 text-center my-4">
                    {imgurl ? <img src={imgurl} className="img-fluid rounded-start border border-dark" style={{ maxWidth: '100px', maxHeight: '100px' }} alt="..." /> : <img src={emptyimg} className=" rounded-start border border-dark" style={{ width: '50px', height: '50px' }} alt="..." />}
                </div>
                <div className="col-md-8 text-center d-flex align-items-center flex-column">
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                        <h5 className="card-title fs-3">{name}</h5>
                        {desc && <p className="lead">{desc}</p>}
                        {title && <p className="lead">{title}</p>}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TimelineCard;