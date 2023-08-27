import EventList from "@/components/EventList"
import { getAllEvents } from "@/data"
export default function Events() {

    const AllEvents = getAllEvents()
    return (
        < >
            <EventList events={AllEvents} />
        </>
    )
}

