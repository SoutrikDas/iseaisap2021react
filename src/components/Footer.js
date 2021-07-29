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
                            Last date for paper submission:December 02, 2019 (Firm deadline)
                            <br />
                            <br />
                            Last date for tutorial submission:December 02, 2019 (Firm deadline)
                            <br />
                            <br />
                            (Note: All deadlines are 11:50 PM IST (UTC+5:30)
                          </p>
                        </div>
 

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                          <h6 className="text-uppercase fw-bold my-4">
                            Technical Sponsor
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet.
                          </p>
                          <h6 className="text-uppercase fw-bold mb-4">
                            Publication
                          </h6>
                          <p>
                            Lorem ipsum dolor sit amet.
                          </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 my-4">

                          <h6 className="text-uppercase fw-bold mb-4">
                            Contact
                          </h6>
                          <p><i className="bi bi-house-fill" /> Indian Institute of Technology Dhanbad, Jharkhand, India,
                            826004</p>
                          <p>
                            <i className="bi bi-envelope-fill" />
                            info@example.com
                          </p>
                          <p><i className="bi bi-telephone-fill" /> + 01 234 567 88</p>
                          <p><i className="bi bi-telephone-fill" /> + 01 234 567 89</p>
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