export default function EventDetailPage({event}) {
return (
    <>
        {
            event.map((event)=> {
                return(
                    <div>
                        #{event.event_number} {event.name}
                        {event.fights.fighter1_id}
                    </div>
                )
            })
        }
        {/* <div id="event-info">
        <img id="event-image" src="" />
        <div>
            <h1 id="event-name">Title</h1>
            <h3 id="year-released">Year Released</h3>
            <p id="description">
                Description
            </p>
        </div>
        </div> */}
    </>
    
    )
}