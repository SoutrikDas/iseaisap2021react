import { Link } from "react-router-dom";
const Alert = () => {
    return ( 
        <div>
            
        {/* <div className="alert alert-info m-0 text-start" role="alert">
          <a className="link-dark lead" href="https://easychair.org/conferences/?conf=iseaisap2021"><div>Submit Papers before 15<sup>th</sup> August</div></a>
        </div> */}
        {/* Below one is a link to conference chair ,instead i thought about a link to call for paper */}
        {/* <div className="alert alert-danger m-0 fs-5" role="alert">
        Submit Papers before 15<sup>th</sup> August.   <span>
          <a className="link-dark" href="https://easychair.org/conferences/?conf=iseaisap2021">  Click Here</a></span>
        </div> */}
        <div className="alert alert-danger m-0 fs-5 " role="alert">
        Submit Papers before 15<sup>th</sup> August.
          <Link to="/authors/regularpapers" className="link-dark"> Click Here</Link>
        </div>
        {/* <div className="alert alert-warning m-0" role="alert">
          <a className="link-dark" href="https://easychair.org/conferences/?conf=iseaisap2021">Submit Papers before 15<sup>th</sup> August</a>
        </div> */}
        </div>
     );
}
 
export default Alert;