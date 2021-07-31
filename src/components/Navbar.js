import { Link } from "react-router-dom";
import iitismlogo from '../images/iitismlogo.png'

const Navbar = () => {
    return ( 

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                  <div className="container-fluid  ">
                    {/*  Use text-end  to align to left */}
                    <a className="navbar-brand " href="https://iitism.ac.in" target="_blank"> 
                      <img className="img-fluid flex-column" style={{width:'50px', height: 'auto'}} src={iitismlogo} alt="" />
                      IIT ISM Dhanbad
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    {/* d-flex align-items-center */}
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                      <ul className="navbar-nav  me-auto mb-2 mb-lg-0 justify-content-center">
                        <li className="nav-item">
                          <Link to="/" className="nav-link active">Home</Link>
                          {/* <a className="nav-link active" aria-current="page" href="index.html">Home</a> */}
                        </li>
                        <li className="nav-item dropdown active">
                          <a className="nav-link dropdown-toggle active " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Authors
                          </a>
                          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            {/* <li><a className="dropdown-item " href="authors/regularpapers.html">Call for Regular Papers</a></li> */}
                            <li><Link className="dropdown-item " to="/authors/regularpapers">Call for Regular Papers</Link></li>
                            {/* <li><a className="dropdown-item" href="authors/tutorials.html">Call for Tutorials</a></li> */}
                            <li><Link className="dropdown-item bg-secondary pe-none" to="/authors/tutorial">Call for Tutorials</Link></li>
                            <li><Link className="dropdown-item" to="/authors/ddaward">Call for Doctoral Dissertion Award</Link></li>
                            {/* <li><hr class="dropdown-divider"></li> */}
                            {/* <li><a className="dropdown-item" href="authors/ddaward.html">Call for Doctoral Dissertion Award</a></li> */}
                          </ul>
                        </li>
                        <li className="nav-item dropdown active">
                          <a className="nav-link dropdown-toggle active " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Registration
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* <li><a className="dropdown-item" href="#">Registration</a></li>
                            <li><a className="dropdown-item" href="#">Hotel Registration</a></li> */}
                            <li><Link className="dropdown-item" to="/registration">Registration</Link></li>
                            <li><Link className="dropdown-item bg-secondary pe-none" to="/registration/hotel">Hotel Registration</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          {/* <a className="nav-link" href="fellowship.html">Fellowship</a> */}
                          <Link className="nav-link  pe-none" to="/fellowship">Fellowship</Link>

                        </li>
                        <li className="nav-item dropdown active">
                          <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Venue
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/venue/conference">Conference Venue</Link></li>
                            <li><Link className="dropdown-item" to="/venue/campusacc">Campus Accomodation</Link></li>
                          
                            {/* <li><a className="dropdown-item" href="venue/conferencevenue.html">Conference Venue</a></li>
                            <li><a className="dropdown-item" href="venue/campusaccomodation.html">Campus Accomodation</a></li> */}
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle pe-none " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Program
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/program/keynotespeakers">Keynote Speakers</Link></li>
                            <li><Link className="dropdown-item" to="/program/technical">Final Technical Program</Link></li>
                            <li><Link className="dropdown-item" to="/program/tutorials">Tutorials</Link></li>
                            <li><Link className="dropdown-item" to="/program/social">Social Events</Link></li>
                          </ul>
                        </li>
                        <li className="nav-item dropdown active">
                          <a className="nav-link dropdown-toggle active " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Committee
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="/committee/organizing">Organizing Committee</Link></li>
                            <li><Link className="dropdown-item" to="/committee/technical">Technical Program Committee</Link></li>
                          </ul>
                        </li>
                        {/* <li className="nav-item bg-danger ">
                          <a className="link-light">Submit Papers before 15<sup>th</sup> August</a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </nav>

     );
}
 
export default Navbar;