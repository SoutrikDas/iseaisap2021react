const Cell = ({name,imgurl,loc}) => {
    return ( 
        // <div>
        //     <h3>{name}</h3>
        //     <p>{loc}</p>
        //     <img src={imgurl} alt="" />
        // </div>

        <div className="card  mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgurl} className="img-fluid rounded-start" alt="Alt  " />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{loc}</p>
                    </div>
                </div>
            </div>
        </div>

     );
}
 
export default Cell;