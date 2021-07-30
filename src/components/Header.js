import iitismlogo from '../images/iitismlogo.png'
import isealogo from '../images/ISEA_logo.png'

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
                <h3 className="text-center">ISEA-ISAP 2020</h3>
                <br/>
                <h4 className="text-center">Fourth ISEA International Conference on Security and Privacy 2021</h4>
                <br/>
                <h4 className="text-center">Date to Be Announced, IIT (ISM) Dhanbad, Dhanbad, Jharkhand</h4>
             </div>
             <div className="flex-shrink-0 p-4">
                 <img src={iitismlogo} className="responsive-logo" alt="..."/>
             </div>
         </div>
     </div>


 </div>
        </div>
     );
}
 
export default Header;