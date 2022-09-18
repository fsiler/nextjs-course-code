import { useRouter } from "next/router";
function SelectedClientProjectPage() {
  const router = useRouter();
  return (
    <div>
      <h1>
        The project page for a specific project ({router.query['clientprojectid']}) for a selected
        client ({router.query['id']})
      </h1>
    </div>
  );
}
export default SelectedClientProjectPage;
