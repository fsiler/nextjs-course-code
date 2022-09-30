import { promises as fs } from "fs"; // can't do this client-side
import path from "path"; // can't do this client-side

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// never visible client side
export async function getStaticProps(context) {
  console.log(context);
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: data,
    revalidate: 10,
//   notFound: True,
//   redirect: { destination: '/blarg', },
  };
}

export default HomePage;
