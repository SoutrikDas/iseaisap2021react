import Cell from '../components/Cell';

import rough from '../images/people/chirnajeevkumar.jpg';
import {chiefPatron, patron,advisoryBoard, conferenceChairs} from './members'
// var data = 






const Organizing = () => {
    return (  
        <div className="m-1 m-md-5 p-1 p-md-5 shadow bg-body rounded">
            {/* Cheif Patron */}
            <h1 class="display-4 mt-5">Chief Patron</h1> 
            <hr className="mx-5"/> 
            <Cell name={chiefPatron.name} imgurl={chiefPatron.imgurl} loc={chiefPatron.worksAt} />


            {/* Patron */}
            <h1 class="display-4 mt-5">Patron</h1> 
            <hr className="mx-5"/> 
            <Cell name={patron.name} imgurl={patron.imgurl} loc={patron.worksAt} />
            <h1 class="display-4 mt-5">Advisory Board</h1> 
            <hr className="mx-5 "/>       

            {
                advisoryBoard.map((people)=>{
                    return(
                        <Cell name={people.name} imgurl={people.imgurl} loc={people.worksAt} position={people.position}/>
                    )
                })
            }
            <h1 class="display-4 mt-5">Conference Chair</h1> 
            <hr className="mx-5 "/>       

            {
                conferenceChairs.map((people)=>{
                    return(
                        <Cell name={people.name} imgurl={people.imgurl} loc={people.worksAt} position={people.position}/>
                    )
                })
            }
             

            {/* <h1 class="display-4 mt-5">Technical Program Committee</h1> 
            <hr className="mx-5"/> 
            {
                technicalProgramCommitte.map((people)=>{
                    return(
                        <Cell name={people.name} imgurl={people.imgurl} loc={people.worksAt} />
                    )
                })
            } */}
        </div>
    );
}
 
export default Organizing;