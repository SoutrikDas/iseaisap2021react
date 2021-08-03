import emptyimg from '../images/emptyimg.png'

const AlternateSpeakerCard = ({ name, imgurl, worksAt, title, topic, bio, abstract, date,website }) => {
    return (
        <div id={name.split(" ").join("")} className="shadow rounded pb-4 text-start mb-md-5 my-3 mx-2 container-fluid border-start border-dark border-5 ">
            <div className="row text-start p-3 mb-md-5 mb-1 bg-dark text-light">
                <h5>{title}</h5>
            </div>
            <div className="row my-md-5 mt-5 my-1 ">
                <div className="col-md-4 mb-4 text-center">
                    <img className="img-fluid border border-dark border-3 " src={imgurl ? imgurl : emptyimg} alt="" />
                </div>
                <div className="col-md-8 fs-5">
                    <p>
                        <strong>Speaker: {name}</strong>
                        <br/>
                        {worksAt}
                        <br/>
                        <strong>Title</strong> : {topic}
                    </p>

                </div>
            </div>
            <div className="row my-md-5 my-1 px-2">
                {/* <p style={{textAlign:"justify"}}>
                    
                    <br/>
                    
                    <strong>Speaker bio</strong> : {bio}
                    <br/>
                    <br/>
                    {website ? <a href={website}>Personal Website</a>:""}
                </p> */}
                {abstract ? <p className="text-justify"><strong>Abstract: </strong> {abstract}</p> : <></>}
                {bio ? <p className="text-justify"><strong>Speaker bio: </strong> {bio}</p> : <></>}
                {website ? <p ><strong>Speaker website: </strong><a className="" href={website}>{website}</a></p> : <></>}
                

            </div>
        </div>
     );
}
 
export default AlternateSpeakerCard;