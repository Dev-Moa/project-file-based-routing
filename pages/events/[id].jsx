import { getEventById } from "@/data"
import { useRouter } from "next/router"
function SingleEvent() {
    const router = useRouter()
    const id = router.query.id
    const event = getEventById(id)

    // if not found

    if (!event) {
        return (
            <p>no event found</p>
        )
    }

    //if found

    return (
        <div >
            <h1 >{event.title}</h1>
        </div>
    )
}

export default SingleEvent