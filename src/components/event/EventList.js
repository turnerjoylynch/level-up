import React, { useEffect } from "react"
import { getEvents } from "./EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__game">{event.game}</div>
                        <div className="event__description">{event.event__description} </div>
                        <div className="event__dateTime">Event held on {event.date} at {event.time} </div>
                        <div className="event__organizer">Organizer: {event.organizer}</div>
                    </section>
                })
            }
        </article>
    )
}