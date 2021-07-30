import * as Icon from 'react-bootstrap-icons';
console.log("footer js is on")

function Footer() {
    return ( 
                <div>
                  <footer className="text-center text-lg-start bg-light text-muted">
                    <div className="container text-center text-md-start mt-5">
                      <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                          <h6 className="text-uppercase fw-bold my-4">
                            <i className="bi bi-calendar-range-fill" /> Important Dates
                          </h6>
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
 
{/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"> */}
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">

                          <h6 className="text-uppercase fw-bold my-4">
                            Sponsored By
                          </h6>
                          <p >
                            <a className="link-dark" href="https://isea-got.in/" target="_blank">Information Security Education and Awareness (ISEA) Project Phase-II</a>
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

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 my-4">

                          <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                          </h6>
                          <p>
                            <i className="bi bi-envelope-fill" />
                            <a className="link-dark" target="_blank" href="mailto:isea-isap2021@iitism.ac.in">isea-isap2021@iitism.ac.in</a>
                          </p>
                          <p><i className="bi bi-house-fill" /> Indian Institute of Technology Dhanbad, Jharkhand, India,
                            826004</p>
                          {/* <p><i className="bi bi-telephone-fill" /> + 01 234 567 88</p>
                          <p><i className="bi bi-telephone-fill" /> + 01 234 567 89</p> */}
                        </div>

                      </div>
                    </div>
                    <div className="text-center p-4 text-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                      © 2021 Copyright: Dept. of CSE - All Right Reserved
                    </div>
                  </footer>
                </div>


     );
}
 
export default Footer;