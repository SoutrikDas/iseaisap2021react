import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';
import green from '@material-ui/core/colors/green';
import Cell from './Cell';
import TimelineCard from './TimelineCard';

var today = new Date(2021,9,15);
console.log(today)
var someday =new Date(2021,6,15)
console.log(someday.toDateString())
// for 2021 , June (6) , 15 you have to do new Date(2021,6-1,15)
var events = [
    {
        "title":"Opening Call for Paper",
        "date": new Date(2021,6-1,15),
    },
    {
        "title":"Paper Submission Deadline",
        "date": new Date(2021,8-1,15),
    },
    {
        "title":"Notification of Acceptance",
        "date": new Date(2021,9-1,20),
    },
    {
        "title":"Submission of Camera Ready Paper",
        "date": new Date(2021,9-1,30),
    },
    {
        "title":"Author Registration",
        "date": new Date(2021,10-1,15),
    },
    {
        "title":"Conference Begins",
        "date": new Date(2021,10-1,27),
    },
    {
        "title": "Pre Conference Talk",
        "isTalk":true,
        "date": new Date(2021,10-1,27,10),
        "name" : "Harshit Agarwal",
        "desc" :" Harshit is feeling very good",
        "imgurl":""
    },
    {
        "title":"Conference Ends",
        "date": new Date(2021,10-1,30),
    },
]

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

console.log("Hello")
console.log(events[2].date)

const CustomTimeline = () => {
    return (
        <div className="">

            <Timeline align="alternate">
            {/* <Timeline> */}
                {
                    events.map( (event)=>{
                        var temp = event.date
                        if(!event.isTalk)
                        {
                            return(
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography color="textSecondary">{temp.toDateString()}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        {event.date<today ? <TimelineDot color="primary"/> : <TimelineDot/>}
                                        
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>{event.title}</TimelineContent>
                                </TimelineItem>
                            ); //if its not a talk

                        }//if end
                        else{
                            return(
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography color="textSecondary">{temp.toString()}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        {event.date<today ? <TimelineDot color="primary"/> : <TimelineDot/>}
                                        
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <TimelineCard  name={event.name} title={event.title} desc={event.desc} imgurl={event.imgurl}/>
                                        {/* <Cell  name={event.name} loc={event.title} pos={event.desc} imgurl={event.imgurl} /> */}
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        }
                    })
                }
                
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined"/>
                    
                    </TimelineSeparator>
                    <TimelineContent>Thank You</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
      );
}
 
export default CustomTimeline;