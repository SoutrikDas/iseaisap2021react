import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';
// import green from '@material-ui/core/colors/green';
import Cell from './Cell';
import TimelineCard from './TimelineCard';
import TextTimelineCard from './TextTimelineCard';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import events from './events';
import AlternateTimelineCard from './AlternateTimelineCard';

const customTheme = createTheme({
    palette: {
        primary: {
            light: '#75e900',
            main: '#61d800',
            dark: '#008b00',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f0e6e6',
            main: '#c93434',
            dark: '#3c3c3c',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        //   backgroundColor: theme.palette.primary.main,
        backgroundColor: customTheme.palette.primary.main,
    },
    mainDot: {
        backgroundColor: customTheme.palette.primary.dark,
    }
}));




var today = new Date();
// console.log(today)
// var someday =new Date(2021,6,15)
// console.log(someday.toDateString())
// for 2021 , June (6) , 15 you have to do new Date(2021,6-1,15)

// let isLast = (event) => events.findIndex(event)==(events.length-1)
let c=0
// console.log("Hello")
// console.log(events[2].date)

const CustomTimeline = () => {
    const classes = useStyles();
    return (
        <div className="">

            <Timeline align="alternate">
                {/* <Timeline> */}
                {
    events.map( (event)=>{
        let temp = event.date
        let isLast = events.slice(-1)[0].title == event.title;
        // console.log(`--islast=${isLast}`)
        let tempcolor = event.date<today ? "primary" : "";
        if(!event.isTalk)
        {   
            // console.log(`Temp color${tempcolor}`)
            return(
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography color="textSecondary">{temp.toDateString()}</Typography>
                    </TimelineOppositeContent>
                    {/* {event.date<today ? <TimelineSeparator color="primary"> : <TimelineSeparator>} */}
                    <TimelineSeparator >
                        <TimelineDot className={event.date<today ?classes.mainDot : ""}/>

                        <TimelineConnector className={isLast?"hidden":event.date<today ? classes.secondaryTail: ""} />
                    </TimelineSeparator>
                    <TimelineContent><strong>{event.title}</strong></TimelineContent>
                </TimelineItem>
            ); //if its not a talk

        }//if end
        // else{
        //     return(
        //         <>
                    

        //             {/* Alternate begins from here */}
        //             <TimelineItem>
        //                 <TimelineOppositeContent>
        //                     <Typography color="textSecondary">{temp.toString().slice(0,-31)}</Typography>
        //                 </TimelineOppositeContent>
        //                 <TimelineSeparator>
        //                     <TimelineDot className={event.date<today ?classes.mainDot : ""}/>

        //                     <TimelineConnector className={event.date<today ? classes.secondaryTail: ""} />
        //                 </TimelineSeparator>
        //                 <TimelineContent>

        //                     {/* <TextTimelineCard  name={event.name} title={event.title} desc={event.desc} imgurl={event.imgurl}/> */}
        //                     {/* <TimelineCard  {...event} /> */}
        //                     <AlternateTimelineCard {...event}/>
        //                 {/* title, imgurl, name, desc */}
        //                 </TimelineContent>
        //             </TimelineItem>

        //         </>
        //     )
        // }
    })
}
                

                
            </Timeline>
        </div>
    );
}

export default CustomTimeline;


// Previous JSX code for Timeline that had the Thank you and if and else for isEvent
