import iitismlogo from "../images/iitismlogo.png";
import isealogo from "../images/ISEA_logo.png";

const Header = () => {
  return (
    <div>
      
      <div className="header shadow">
        <div className="container ">
          <div className="d-flex flex-md-row flex-column  align-items-center">
            <div className="flex-shrink-0 p-4">
              <img src={isealogo} className="responsive-logo" alt="..." />
            </div>
            <div className="flex-grow-1 my-2 px-2">
              <h3 className="text-center ">
                <strong>ISEA-ISAP 2021</strong>
              </h3>
              <br />
              <h4 className="text-center ">
                4<sup>th</sup> ISEA Virtual International Conference on Security
                and Privacy 2021
              </h4>
              <br />
              <h4 className="text-center ">
                27-30 October, 2021, IIT (ISM) Dhanbad, Dhanbad, Jharkhand
              </h4>
            </div>
            <div className="flex-shrink-0 p-4">
              <img src={iitismlogo} className="responsive-logo" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
