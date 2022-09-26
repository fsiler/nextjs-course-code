import { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/event-list";
import EventsSearch from "../../components/events-search";

function EventsPage() {
  const events = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}
export default EventsPage;
