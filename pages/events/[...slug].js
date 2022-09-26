import { useRouter } from "next/router";

function EventPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Some event filtered by date and other extended criteria</h1>
    </div>
  );
}
export default EventPage;
