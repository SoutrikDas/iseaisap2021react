// under Conference Venue 
const Conference = () => {
    return (    
            <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded">
                <h1  className="display-4 px-2 mt-4 mb-5">About the Institute</h1>
                <div className="d-flex flex-column flex-lg-row-reverse align-items-my-4">
                    <div className="flex-shrink-0 px-4 pt-md-3">
                        {/* style="max-width:30rem" */}
                        <img src="https://alumni.iitism.ac.in/assets/images/Home/index-01.jpg" className="img-fluid w-100"  style={{maxWidth:'30rem',}} alt="..."/>
                    </div>
                    <div className="flex-grow-1 px-2 pt-4 pt-md-0">
                        {/* style="text-align:justify" */}
                        <p style={{textAlign:'justify'}}>Indian Institute of Technology (Indian School of Mines), Dhanbad is one of
                        India&#39;s premier
                        institutions and serving the country since 1926. It was formerly known as Indian School of
                        Mines, Dhanbad, and was opened on 9th December 1926, by the Viceroy Lord Irwin on the
                        model of the Royal School of Mines, London. It started as an institution to impart mining
                        education, and today has grown into a technical institution with various academic departments.
                        The institute was converted into an IIT on September 2016. The institute is located at a distance
                        of about 3 KM from Dhanbad Railway Station. Dhanbad is well connected by railways with
                        other important cities of the country like Chennai, Delhi, Kolkata, Mumbai, etc. The nearest
                        airports are Kolkata (250 KM) and Ranchi (180 KM). Please visit <a href="http://www.iitism.ac.in" target="_blank" rel="noopener noreferrer">our homepage</a> for
                        more details.</p>
                    </div>
                </div>
                <hr/>
                <h1  className="display-4 px-2 mt-4 mb-5">About the Department</h1>
                <div className="d-flex flex-column flex-lg-row-reverse align-items-center my-4">
                <div className="flex-shrink-0 px-4">
                    <img src="https://ism.acm.org/static/media/cse-dept.64ba66db.jpeg" className="img-fluid w-100" style={{maxWidth:'30rem',}} alt="..."/>
                </div>
                <div className="flex-grow-1 px-2 pt-4">
                    <p style={{textAlign:'justify'}}>The Department of Computer Science & Engineering was set up in the year 1997, following the
                    resounding success of IIT(ISM) Alumni in the fields of Computer Science and Information
                    Technology. The department provides an outstanding research environment complemented by
                    superior teaching for its students to flourish in the IT sector. The department conducts academic
                    programs leading to the award of B.Tech degree in Computer Science & Engineering, Dual
                    Degree in Computer Science & Engineering, M. Tech degree in Computer Science &
                    Engineering, M. Tech degree in Computer Science & Engineering with Specialization in
                    Information Security, and also Ph.D. in Computer Science & Engineering. The department
                    boasts of highly qualified faculty members who are active members of reputed National and
                    International Societies. They are instrumental in research and development activities. The
                    primary research areas include Information Security, Network Security, Multimedia Security,
                    Machine Learning, Soft Computing, Data Mining, Cloud Computing, Bioinformatics, Wireless
                    Networks, Software Engineering, Image Processing, etc. Please visit <a href="https://www.iitism.ac.in/index.php/Departments/dept_cse" target="_blank" rel="noopener noreferrer">iitism.ac.in/index.php/computer_science</a> for more details.</p>
                </div>
                </div>  
            </div>
    
     );
}
 
export default Conference;