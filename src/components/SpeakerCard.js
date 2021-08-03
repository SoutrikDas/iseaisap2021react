const SpeakerCard = ({ name, imgurl, worksAt, title, topic, bio, abstract, date }) => {
    return (
        <div>
            {/* style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} */}
            <div className="container  bo my-5 py-3" >
                <h2 className="text-start bg-primary text-light d-inline-block p-3 rounded-3">{title}</h2>
                <div className="card mb-3 w-100">
                    <div className="row g-0">
                        <div className="col-md-4 text-center my-4">
                            <img src="https://www.iitism.ac.in/assets/img/admin/cman.jpg" className="img-fluid rounded-start border border-dark" style={{ maxWidth: "160px", maxHeight: "170px", }} alt="..." />
                        </div>
                        <div className="col-md-8 text-center d-flex align-items-center flex-column">
                            <div className="card-body d-flex align-items-center justify-content-center flex-column">
                                <h5 className="card-title fs-3">{name}</h5>
                                <p className="card-text">{topic}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    {abstract && <p style={{ textAlign: "justify" }}><strong>Abstract: </strong>{abstract}
                    </p>}
                    <br/>
                    <p style={{ textAlign: "justify" }}><strong>Speaker Bio: </strong>{bio}
                    </p>
                    <br/>
                    <p style={{ textAlign: "justify" }}><strong>Personal Website: </strong><a href="#">www.google.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SpeakerCard;