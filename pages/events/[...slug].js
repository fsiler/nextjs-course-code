import { useRouter } from "next/router";
import { Fragment } from "react";

import { getFilteredEvents } from "../../dummy-data";

import Button from "../../components/ui/button";
import EventList from "../../components/event-list";

function EventPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const year = +filterData[0];
  const month = +filterData[1];
  if (
    isNaN(year) ||
    isNaN(month) ||
    month < 1 ||
    month > 12 ||
    year < 2020 ||
    year > 2030
  ) {
    return <p>values no good, please try again</p>;
  }
  const filteredEvents = getFilteredEvents({ year: year, month: month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <p>no events found</p>
        <Button link="/events">All Events</Button>
      </Fragment>
    );
  }

  return <EventList items={filteredEvents} />;
}
export default EventPage;
