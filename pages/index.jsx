import EventList from "@/components/EventList"
import { getFeaturedEvents } from "@/data"
export default function Home() {
  const FeaturedEvents = getFeaturedEvents()
  return (
    < >
      <EventList events={FeaturedEvents} />
    </>
  )
}
