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

var technicalProgramCommitte = [
    {
        "name":"Prof. Sugata Gangopadhyay",
        "localimg" : "images/people/sugatagangopadhyay.jpg",
        "imgurl" : "https://channeli.in/media/kernel/display_pictures/8388d60c-191e-41f5-b924-b0eb318c5bf7.jpg",
        "worksAt" : "Indian Institute Of Technology, Roorkee",
    },
    {
        "name":"Prof. Sourav Mukhopadhyay",
        "localimg" : "",
        "imgurl" : "http://www.facweb.iitkgp.ac.in/~sourav/sourav1.jpg",
        "worksAt" : "Indian Institute of Technology, Kharagpur",
    },
    {
        "name":"Prof. Mayank Dave",
        "localimg" : "",
        "imgurl" : "https://www.nitkkr.ac.in/admin/member_images/1494585987Photo%20MD%202016.jpg",
        "worksAt" : "National Institute of Technology, Kurukshetra",
    },
    {
        "name":"Prof. S. Ganesan",
        "worksAt" : "University of Oakland University, USA",
        "imgurl" : "http://www.secs.oakland.edu/~ganesan/images/main_pic.jpg",
        "localimg" : "",
    },
    {
        "name":"Prof. G. Sahoo",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/1218/1218.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr Somnath Tripathy",
        "worksAt" : "Indian Institute of Technology, Patna",
        "imgurl" : "https://www.iitp.ac.in/~som/pics/som-pic.png",
        "localimg" : "",
    },
    {
        "name":"Dr. Sushanta Mukhopadhyay",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/845/emp_845.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Haider Banka",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad, India",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/859/859.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Sujoy Sinha Roy",
        "worksAt" : "University of Birmingham Edgbaston, United Kingdom",
        "imgurl" : "https://www.cs.bham.ac.uk/~sinharos/index_files/roy.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Piyush Harsh",
        "worksAt" : "Zurich University of Applied Sciences, Zurich",
        "imgurl" : "https://blog.zhaw.ch/icclab/files/2013/04/piyush_harsh-150x150.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. S. K Hafizul Islam",
        "worksAt" : "Indian Institute of Information Technology, Kalyani",
        "imgurl" : "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=ip3ClBIAAAAJ&citpid=65",
        "altimgurl": "https://lh3.googleusercontent.com/qpoXgTlvJp7mu9xVf1VWjc6ftBay_8mg6JOe9bM6CxMXybVFDyTPESkK5M8Kw9MzR84UbRoP8zI_yIbuemECfQm6qkOBiM_1J8ZoPM0UmgajImIcxg-RBNHEDejYC64n3g=w1280",
        "localimg" : "",
    },
    {
        "name":"Dr. Lakmini Malasinghe",
        "worksAt" : "SLIIT, SriLanka",
        "imgurl" : "https://static.sliit.lk/profile/lakminim-1603963183.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Bhupesh Mishra",
        "worksAt" : "University of Bradford, UK",
        "imgurl" : "https://ris.bradford.ac.uk/live//w_rms_blob_common.download_photo?pObjectId=212448366",
        "localimg" : "",
    },
    {
        "name":"Dr. Somitra Kr. Sanadhya",
        "worksAt" : "Indian Institute of Technology Ropar",
        "imgurl" : "https://iitrpr.irins.org/assets/profile_images/62410.PNG",
        "localimg" : "",
    },
    {
        "name":"Dr. Arijit Karati",
        "worksAt" : "National Sun Yat0sen University Kaohsiung, Taiwan",
        "imgurl" : "https://lh4.googleusercontent.com/QHLb-CxTdRw-kU7C59iANFE6-_bCQmjNQvVPA9GxrDMBn4O7FQMWp4oXgM5t55nJRQ7X7swOFMla5wO28hJAZ16atx1ZDlVdWZeDpFB4Ckqel_hov3n2Phg06sGCA0CkOQ=w1280",
        "localimg" : "",
    },
    {
        "name":"Dr. Abhimanyu Kumar",
        "worksAt" : "National Institute of Technology, Uttarakhand",
        "imgurl" : "",
        "localimg" : "",
    },
    {
        "name":"Dr. Rifaqat Ali",
        "worksAt" : "National Institute of Technology Hamirpur, India",
        "imgurl" : "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=m4NaiJEAAAAJ&citpid=5",
        "localimg" : "",
    },
    {
        "name":"Dr. Hari Om",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad, India",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/818/emp_818_20151118052444.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Abhay Kumar Singh",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad, India",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/911/emp_911_20151118061811.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Soumen Bag",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad, India",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/1069/emp_1069.jpg",
        "localimg" : "",
    },
    {
        "name":"Dr. Ansuman Bhattacharya",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad, India",
        "imgurl" : "https://www.iitism.ac.in/assets/employee//1177.jpg",
        "localimg" : "",
    },
    {
        "name":"Ms Tanusree Kaibartta",
        "worksAt" : "Indian Institute of Technology (ISM) Dhanbad, India",
        "imgurl" : "https://www.iitism.ac.in/assets/employee/1036/emp_1036_20151118065347.jpg",
        "localimg" : "",
    },
    
    
    
]


const Organizing = () => {
    return (  
        <div className="mx-sm-5 px-sm-5 mx-2">
            {/* Cheif Patron */}
            <h1 class="display-4 mt-5">Chief Patron</h1> 
            <hr className="mx-5"/> 
            <Cell name={chiefPatron.name} imgurl={chiefPatron.imgurl} loc={chiefPatron.worksAt} />


            {/* Patron */}
            <h1 class="display-4 mt-5">Patron</h1> 
            <hr className="mx-5"/> 
            <Cell name={patron.name} imgurl={patron.imgurl} loc={patron.worksAt} />
            <h1 class="display-4 mt-5">Conference Chair</h1> 
            <hr className="mx-5 "/>       

            {
                conferenceChairs.map((people)=>{
                    return(
                        <Cell name={people.name} imgurl={people.imgurl} loc={people.worksAt} position={people.position}/>
                    )
                })
            }
             

            <h1 class="display-4 mt-5">Technical Program Committee</h1> 
            <hr className="mx-5"/> 
            {
                technicalProgramCommitte.map((people)=>{
                    return(
                        <Cell name={people.name} imgurl={people.imgurl} loc={people.worksAt} />
                    )
                })
            }
        </div>
    );
}
 
export default Organizing;