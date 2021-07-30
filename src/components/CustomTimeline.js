import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';
var today = new Date();
console.log(today)
var someday =new Date(2021,6,15)
console.log(someday.toDateString())
var events = [
    {
        "title":"Opening Call for Paper",
        "date": new Date(2021,6,15),
    },
    {
        "title":"Paper Submission Deadline",
        "date": new Date(2021,8,15),
    },
    {
        "title":"Notification of Acceptance",
        "date": new Date(2021,9,20),
    },
    {
        "title":"Submission of Camera Ready Paper",
        "date": new Date(2021,9,30),
    },
    {
        "title":"Author Registration",
        "date": new Date(2021,10,15),
    },
    {
        "title":"Conference Begins",
        "date": new Date(2021,10,27),
    },
    {
        "title":"Conference Ends",
        "date": new Date(2021,10,30),
    },
]
console.log("Hello")
console.log(events[2].date)

const CustomTimeline = () => {
    return (
        <div className="col-4">

            {/* <Timeline align="alternate"> */}
            <Timeline>
                {
                    events.map( (event)=>{
                        var temp = event.date
                        return(
                            <TimelineItem>
                                <TimelineOppositeContent>
                                    <Typography color="textSecondary">{temp.toDateString()}</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>{event.title}</TimelineContent>
                            </TimelineItem>
                        );
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