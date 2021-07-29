import Cell from '../components/Cell';
import Data from '../data.json'
import rough from '../images/people/chirnajeevkumar.jpg';
// var data = 
console.log(Object.keys(Data))


var peopleList =[
    {
        name : "Prof. Chiranjeev Kumar", imgurl : "https://www.iitism.ac.in/~chiranjeev/images/demo/ck.jpg" , worksAt : "Indian Institute of Technology (ISM), Dhanbad" , position:"General Chair", 
    },
    {
        name : "Dr. Sachin Tripathi", imgurl : "https://www.iitism.ac.in/assets/employee/817/emp_817_20151118052423.jpg" , worksAt : "Indian Institute of Technology (ISM), Dhanbad" , position:"Program Chair",
    },
    {
        name : "Prof. Keshav Dahal", imgurl : "https://research-portal.uws.ac.uk/files-asset/258789/Keshav_photo.jpg?w=160&f=webp" , worksAt : "University of the West of Scotland (UWS)U.K" , position:"Program Co-Chair",
    },
    {
        name : "Dr. Arup Kumar Pal", imgurl : "https://www.iitism.ac.in/assets/employee/959/959.jpg" , worksAt : "Indian Institute of Technology (ISM) Dhanbad" , position:"Organizing Chair", 
    },
    {
        name : "Dr. A. C. S. Rao", imgurl : "https://www.iitism.ac.in/~acsrao/img/member/member-1.png" , worksAt : "Indian Institute of Technology (ISM) Dhanbad" , position:"Finance Chair", 
    },
    {
        name : "Dr. Dharavath Ramesh", imgurl : "https://www.iitism.ac.in/assets/employee/958/emp_958_20151119103752.jpg" , worksAt : "Indian Institute of Technology (ISM) Dhanbad" , position:"Publication Chair", 
    },
    {
        name : "Dr. A. Tarachand", imgurl : "https://www.iitism.ac.in/assets/employee/915/emp_915.jpg" , worksAt : "Indian Institute of Technology (ISM) Dhanbad" , position:"PhD Conclave Chair", 
    },
    {
        name : "Dr. Rajendra Pamula", imgurl : "https://www.iitism.ac.in/assets/employee/919/emp_919_20151118062014.jpg" , worksAt : "Indian Institute of Technology (ISM) Dhanbad" , position:"Publicity", 
    },
    {
        name : "Dr. N Hubbali", imgurl : "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=tER-kV0AAAAJ&citpid=3" , worksAt : "Indian Institute of Technology Indore" , position:"Publicity", 
    },
    {
        name : "Dr. P Swain", imgurl : "https://i.ibb.co/185PVL8/download.jpg" , worksAt : "National Institute of Technology Goa" , position:"Publicity", 
    },
    {
        name : "Dr. Bidyut Kumar Patra", imgurl : "" , worksAt : "National Institute of Technology Rourkela" , position:"Publicity", 
    },
]


const Organizing = () => {
    return (  
        <div className="container text-center">
            <h2>Organizing Committee</h2>        

            {
                peopleList.map((people)=>{
                    return(
                        <Cell name={people.name} imgurl={people.imgurl} loc={people.worksAt}/>
                    )
                })
            }
             

        </div>
    );
}
 
export default Organizing;