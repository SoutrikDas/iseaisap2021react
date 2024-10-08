import AlternateSpeakerCard from '../components/AlternateSpeakerCard';
import SpeakerCard from '../components/SpeakerCard';
import speakers from './speakers';
import events from '../components/events';

const KeynoteSpeakers = () => {
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
                events.map((event=>{
                    if( event.isTalk)
                    {
                        return(
                            <AlternateSpeakerCard {...event}/>
                        );

                    }

                }))
            }

        </div>
    );
}

export default KeynoteSpeakers;