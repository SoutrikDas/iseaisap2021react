import AlternateSpeakerCard from '../components/AlternateSpeakerCard';
import AlternateTimelineCard from './AlternateTimelineCard';
import events from '../components/events';
const TopAttraction = () => {
    return (
        <div className="container my-md-4  p-md-5 p-1">
            {/* {
                speakers.map((speaker=>{
                    return(
                        <SpeakerCard {...speaker}/>
                    );

                }))
            } */}
            {
                // speakers.map((speaker=>{
                //     return(
                //         <AlternateSpeakerCard {...speaker}/>
                //     );

                // }))
            }
            {
                events.map((event => {
                    if (event.isTalk) {
                        return (
                            // <AlternateSpeakerCard {...event} />
                            <AlternateTimelineCard {...event}/>
                        );

                    }

                }))
            }

        </div>
    );
}

export default TopAttraction;