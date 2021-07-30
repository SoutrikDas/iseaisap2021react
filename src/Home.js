import campus1 from './images/campus1.jfif'
import campus2 from './images/campus2.jfif'
import campus3 from './images/campus3.jfif'

const Home = () => {
    return ( 
        <div className="m-5 p-5">
            
            <div id="carouselExampleIndicators" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={campus1} className="d-block w-100" style={{minHeight: '200px', maxHeight: '450px'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={campus2} className="d-block w-100" style={{minHeight: '200px', maxHeight: '450px'}} alt="..." />
          </div>
          <div className="carousel-item">
            <img src={campus3} className="d-block w-100" style={{minHeight: '200px', maxHeight: '450px'}} alt="..." />
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

        <h1 class="display-4 mt-5">Important Dates</h1> 
        <hr className="mx-5 "/> 
        <p>
                            Opening Call for Paper : 15 June, 2021
                            <br />
                            <mark>Paper Submission Deadline : 15 August, 2021</mark>
                            <br />
                            <a href="https://easychair.org/conferences/?conf=iseaisap2021">Submit Here</a>
                            <br />
                            Notification of Acceptance : 20 September, 2021
                            <br />
                            Submission of Camera Ready Paper : 30 September, 2021
                            <br />
                            Author Registration : 15 October, 2021
                            <br />
                            Conference : 27-30 October, 2021
                          </p>    

        </div>
     );
}
 
export default Home;