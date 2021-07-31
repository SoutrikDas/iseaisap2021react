import Cell from '../components/Cell';
import Data from '../data.json'
import rough from '../images/people/chirnajeevkumar.jpg';

// var data = 
console.log(Object.keys(Data))
var chiefPatron = {
    "name":"Prof. Prem Vrat",
    "worksAt" : "Chair Person, BoG, Indian Institute of Technology (ISM), Dhanbad",
    "imgurl" : "https://www.iitism.ac.in/assets/img/admin/cman.jpg",
    
}

var patron =    {
        "name":"Prof. Rajiv Sekhar",
        "worksAt" : "Director of Indian Institute of Technology (ISM), Dhanbad",
        "imgurl" : "https://www.iitism.ac.in/assets/img/admin/dt.jpg",
        
    }
var advisoryBoard = [
    {
        "name":"Prof. N. Balakrishnan",
        "localimg":"",
        "imgurl":"http://aero.iisc.ac.in/wp-content/uploads/2016/05/n-balakrishnan.jpg",
        "worksAt":"Indian Institute of Science, Bangalore"
    },
    {
        "name":"Prof. R.K. Shyamasundar",
        "localimg":"",
        "imgurl":"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=Q1hcun8AAAAJ&citpid=1",
        "worksAt":"Indian Institute of Technology, Bombay"
    },
    {
        "name":"Prof. Sukumar Nandi",
        "localimg":"",
        "imgurl":"https://www.iitg.ac.in/sukumar/index_body_html_fa8c2a7d0e4f10cb.png",
        "worksAt":"Indian Institute of Technology, Guwahati"
    },
    {
        "name":"Prof. C.E. Veni Madhavan",
        "localimg":"",
        "imgurl":"https://www.csa.iisc.ac.in/people/images/faculty-cevm.jpg",
        "worksAt":"Indian Institute of Science, Bangalore"
    },
    {
        "name":"Prof. V. Kamakoti",
        "localimg":"",
        "imgurl":"http://www.cse.iitm.ac.in/images/kama.jpg",
        "worksAt":"Indian Institute of Technology, Madras"
    },
    {
        "name":"Shri Sanjay Kumar Vyas",
        "localimg":"",
        "imgurl":"",
        "worksAt":"Ministry of Electronics and Information Technology (MeitY)"
    },
    {
        "name":"Dr. Jaideep Kumar Mishra",
        "localimg":"",
        "imgurl":"https://d12aarmt01l54a.cloudfront.net/cms/images/Media-20201004234216/600-700.png",
        "worksAt":"Ministry of Electronics and Information Technology (MeitY)"
    },
    {
        "name":"Prof. J. K. Pattanayak",
        "localimg":"",
        "imgurl":"https://scholar.googleusercontent.com/citations?view_op=view_photo&user=0sW0DosAAAAJ&citpid=2",
        "worksAt":"Indian Institute of Technology (ISM) , Dhanbad"
    },
    {
        "name":"Prof. G.P. Biswas",
        "localimg":"",
        "imgurl":"https://iitism.irins.org/assets/profile_images/44241.jpg",
        "worksAt":"Indian Institute of Technology (ISM) , Dhanbad"
    },
    {
        "name":"Prof. Prasanta K. Jana",
        "localimg":"",
        "imgurl":"https://iitism.irins.org/assets/profile_images/44240.png",
        "worksAt":"Indian Institute of Technology (ISM) , Dhanbad"
    },
    {
        "name":"Prof. Shalivahan",
        "localimg":"",
        "imgurl":"https://iitism.irins.org/assets/profile_images/97457.jpg",
        "worksAt":"Indian Institute of Technology (ISM) , Dhanbad"
    },
    {
        "name":"Prof. Dheeraj Kumar",
        "localimg":"",
        "imgurl":"https://iitism.irins.org/assets/profile_images/97559.jpg",
        "worksAt":"Indian Institute of Technology (ISM) , Dhanbad"
    }
]
var conferenceChairs =[
    {
        "name" : "Prof. Chiranjeev Kumar", "imgurl" : "https://www.iitism.ac.in/~chiranjeev/images/demo/ck.jpg" , "worksAt" : "Indian Institute of Technology (ISM), Dhanbad" , "position":"General Chair", 
    },
    {
        "name" : "Dr. Sachin Tripathi", "imgurl" : "https://www.iitism.ac.in/assets/employee/817/emp_817_20151118052423.jpg" , "worksAt" : "Indian Institute of Technology (ISM), Dhanbad" , "position":"Program Chair",
    },
    {
        "name" : "Prof. Keshav Dahal", "imgurl" : "https://research-portal.uws.ac.uk/files-asset/258789/Keshav_photo.jpg?w=160&f=webp" , "worksAt" : "University of the West of Scotland (UWS)U.K" , "position":"Program Co-Chair",
    },
    {
        "name" : "Dr. Arup Kumar Pal", "imgurl" : "https://www.iitism.ac.in/assets/employee/959/959.jpg" , "worksAt" : "Indian Institute of Technology (ISM) Dhanbad" , "position":"Organizing Chair", 
    },
    {
        "name" : "Dr. A. C. S. Rao", "imgurl" : "https://www.iitism.ac.in/~acsrao/img/member/member-1.png" , "worksAt" : "Indian Institute of Technology (ISM) Dhanbad" , "position":"Finance Chair", 
    },
    {
        "name" : "Dr. Dharavath Ramesh", "imgurl" : "https://www.iitism.ac.in/assets/employee/958/emp_958_20151119103752.jpg" , "worksAt" : "Indian Institute of Technology (ISM) Dhanbad" , "position":"Publication Chair", 
    },
    {
        "name" : "Dr. A. Tarachand", "imgurl" : "https://www.iitism.ac.in/assets/employee/915/emp_915.jpg" , "worksAt" : "Indian Institute of Technology (ISM) Dhanbad" , "position":"PhD Conclave Chair", 
    },
    {
        "name" : "Dr. Rajendra Pamula", "imgurl" : "https://www.iitism.ac.in/assets/employee/919/emp_919_20151118062014.jpg" , "worksAt" : "Indian Institute of Technology (ISM) Dhanbad" , "position":"Publicity", 
    },
    {
        "name" : "Dr. N Hubbali", "imgurl" : "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=tER-kV0AAAAJ&citpid=3" , "worksAt" : "Indian Institute of Technology Indore" , "position":"Publicity", 
    },
    {
        "name" : "Dr. P Swain", "imgurl" : "https://i.ibb.co/185PVL8/download.jpg" , "worksAt" : "National Institute of Technology Goa" , "position":"Publicity", 
    },
    {
        "name" : "Dr. Bidyut Kumar Patra", "imgurl" : "" , "worksAt" : "National Institute of Technology Rourkela" , "position":"Publicity", 
    },
]




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