import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";

export default function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const path = `/events/${year}/${month}`;

    router.push(path);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
