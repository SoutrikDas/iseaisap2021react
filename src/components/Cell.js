const Cell = ({name,imgurl,loc,position}) => {
    return ( 
        // <div>
        //     <h3>{name}</h3>
        //     <p>{loc}</p>
        //     <img src={imgurl} alt="" />
        // </div>
// style={{maxWidth: '540px'}} m-sm-5 m-1
        <div className="card  " >
            <div className="row g-0">
                <div className="col-md-2">
                    {/* ratio ratio-1x1 helps a bit */}
                    {imgurl && <img src={imgurl} className=" custom-img" alt="Alt  " />}
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{loc}</p>
                        {position && <p className="card-text">{position}</p>}
                    </div>
                </div>
            </div>
        </div>

        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-12 mt-3">
        //             <div className="card">
        //                 <div className="card-horizontal">
        //                     <div className="img-square-wrapper">
        //                         <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
        //                     </div>
        //                     <div className="card-body">
        //                         <h4 className="card-title">Card title</h4>
        //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                     </div>
        //                 </div>
        //                 <div className="card-footer">
        //                     <small className="text-muted">Last updated 3 mins ago</small>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

     );
}
 
export default Cell;