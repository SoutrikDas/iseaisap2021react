import * as Icon from 'react-bootstrap-icons';
console.log("footer js is on")

function Footer() {
    return ( 
                <div>
                  <footer className="text-center text-lg-start bg-dark text-muted">
                    <div className="container text-center text-md-start mt-5">
                      <div className="row mt-3">
                        {/* col-lg-4 col-xl-3 */}
                        <div className="col-md-5  mx-auto mb-4 ">

                          <h6 className="text-uppercase fw-bold my-4" style={{opacity:'0.7',color:'white'}}>
                            <i className="bi bi-calendar-range-fill" /> Important Dates
                          </h6>
                          <p>
                            {/* Opening Call for Paper :<span className="text-warning"> 15 June, 2021</span> */}
                            Opening Call for Paper :<span style={{opacity:'0.6',color:'white'}}> 15 June, 2021</span>
                            <br />
                            <br />
                            {/* Paper Submission Deadline :<span className="text-primary text-shadow"> 15 August, 2021</span> */}
                            Paper Submission Deadline :<span style={{opacity:'0.6',color:'white'}}> 15 August, 2021</span>
                            <br />
                            {/* <br />
                            <a className="text-reset" href="https://easychair.org/conferences/?conf=iseaisap2021">Submit Here</a>
                            <br /> */}
                            <br />
                            Notification of Acceptance : <span style={{opacity:'0.6',color:'white'}}>20 September, 2021</span>
                            <br />
                            <br />
                            Submission of Camera Ready Paper : <span style={{opacity:'0.6',color:'white'}}>30 September, 2021 </span>
                            <br />
                            <br />
                            Author Registration : <span style={{opacity:'0.6',color:'white'}}>15 October, 2021</span>
                            <br />
                            <br />
                            Conference : <span style={{opacity:'0.6',color:'white'}}>27-30 October, 2021</span>
                          </p>
                        </div>
 
{/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> */}
                        <div className="col-md-4 mx-auto mb-4">

                          <h6 className="text-uppercase fw-bold my-4" style={{opacity:'0.7',color:'white'}}>
                            Sponsored By
                          </h6>
                          <p >
                            <a className="text-reset" href="https://isea-got.in/" target="_blank">Information Security Education and Awareness (ISEA) Project Phase-II</a>
                            <br />
                            <br/>
                            MeitY, Government of India
                          </p>
                          {/* <h6 className="text-uppercase fw-bold mb-4">
                            Publication
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet.
                          </p> */}
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 my-4">

                          <h6 className="text-uppercase fw-bold mb-4" style={{opacity:'0.7',color:'white'}}>
                            Contact
                          </h6>
                          <p>
                            <i className="bi bi-envelope-fill" />
                            <a className="text-reset" target="_blank" href="mailto:isea-isap2021@iitism.ac.in"> isea-isap2021@iitism.ac.in</a>
                          </p>
                          <p><i className="bi bi-house-fill" /> Indian Institute of Technology Dhanbad, Jharkhand, India,
                            826004</p>
                          {/* <p><i className="bi bi-telephone-fill" /> + 01 234 567 88</p>
                          <p><i className="bi bi-telephone-fill" /> + 01 234 567 89</p> */}
                        </div>

                      </div>
                    </div>
                    <div className="text-center p-4 " >
                      © 2021 Copyright: Dept. of CSE - All Right Reserved
                      <br/>
                    </div>
                    <div className="text-center p-4 text-reset bg-dark">Made with ❤️  By <a className="text-reset " href="https://www.linkedin.com/in/harshit-agarwal-38936a202/" target="_blank">Harshit</a> and <a className="text-reset "  href="https://www.linkedin.com/in/soutrik-das-024073164/" target="_blank">Soutrik</a></div>
                  </footer>
                </div>


     );
}
 
export default Footer;