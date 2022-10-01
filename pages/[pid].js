import { promises as fs } from "fs"; // can't do this client-side
import path from "path"; // can't do this client-side

import { Fragment } from "react";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map(product => product.id);
  const paths = ids.map(id => ({ params: { pid: id}}));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  return { props: { loadedProduct: product } };
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);

  return JSON.parse(jsonData);
}

export default ProductDetailPage;
