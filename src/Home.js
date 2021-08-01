import campus1 from './images/campus1.jfif'
import campus2 from './images/campus2.jfif'
import campus3 from './images/campus3.jfif'

import { Link } from "react-router-dom";
import CustomTimeline from './components/CustomTimeline';

const Home = () => {
  return (


    <div>
      <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded">
        <div id="carouselExampleIndicators" className="carousel slide my-4 mx-md-5 px-md-5" data-bs-ride="carousel">
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


        <Link className="btn-primary btn mt-3 " to="/authors/regularpapers" >Check Call for Regular Papers To Submit Papers</Link>
      </div>
      <h1 className="display-4 mt-5">Timeline</h1> 
        <hr className="mx-5 mb-5"/>
      <div className=" m-md-5  p-md-5 shadow bg-body rounded">
        <CustomTimeline />
      </div>
    </div>

  );
}

export default Home;