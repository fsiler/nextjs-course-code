import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list";

function FeaturedEventsPage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>Featured Events</h1>
      <div>
        <EventList items={featuredEvents} />
      </div>
    </div>
  );
}
export default FeaturedEventsPage;
