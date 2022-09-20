import {useRouter} from 'next/router';

function EventPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Some event with id {router.query['eventid']}</h1>
    </div>
  );
}
export default EventPage;
