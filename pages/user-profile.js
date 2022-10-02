export async function getServerSideProps(context) {
  const { params, req, res } = context;

  // no need to return revalidate key
  return {
    props: { username: "Max" },
  };
}

function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;
