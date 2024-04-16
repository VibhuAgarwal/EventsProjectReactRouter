import { useParams } from "react-router-dom";

function EventDetailsPage() {
    const params = useParams();
    return (
        <>
            <h1>EventDetailsPage</h1>
            <p>Event Id : {params.eventId}</p>
        </>
    )
}
export default EventDetailsPage;