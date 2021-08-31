import campus1 from './images/campus1.jfif'
import campus2 from './images/campus2.jfif'
import campus3 from './images/campus3.jfif'

import { Link } from "react-router-dom";
import CustomTimeline from './components/CustomTimeline';
import TopAttraction from './components/TopAttraction';
import notices from './notice'
console.log("notice",notices)

const Home = () => {
  return (


    <div>
      <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded d-flex justify-content-center align-items-center flex-column flex-md-row-reverse">
        <div style={{height: '400px' }} className="border border-dark width1 card">
          <div className="card-header bg-dark text-light">
            Announcements
          </div>
          <div className = "card-body">
            <ul>
              {
                notices.map( (notice) =>{
                  return(
                    // <li>
                      <li className=" my-2 mx-2 mx-md-0 lh-sm fs-5 text-start text-decoration-none">
                        {notice.isLink ?  <Link className="text-decoration-none" to={notice.url}>{notice.body}</Link> : <a href={notice.url} className="text-decoration-none">{notice.body}</a> }
                      </li>

                    {/* </li> */}
                  )
                })
              }

            </ul>
          </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide my-4 px-md-5 width2" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={campus1} className="d-block w-100" style={{ minHeight: '200px', maxHeight: '450px' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={campus2} className="d-block w-100" style={{ minHeight: '200px', maxHeight: '450px' }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src={campus3} className="d-block w-100" style={{ minHeight: '200px', maxHeight: '450px' }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <h1 class="display-4 m-5 ">Important Dates</h1> */}
        {/* <h1 class="display-4 mt-5">Call for Regular Papers</h1> 
            <hr className="mx-5 mb-5"/> */}


      </div>
        <Link className="btn-primary btn mt-3 " to="/authors/regularpapers" >Check Call for Regular Papers To Submit Papers</Link>
      <h1 className="display-4 mt-5">Timeline</h1> 
        <hr className="mx-5 mb-5"/>
      <div className=" m-md-5  p-md-5 shadow bg-body rounded">
        <CustomTimeline />
      </div>
      <h1 className="display-4 mt-5">Top Attractions</h1> 
        <hr className="mx-5 mb-5"/>
        <div>
          <TopAttraction />
        </div>
    </div>

  );
}

export default Home;