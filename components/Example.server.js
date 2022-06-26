import {getPostData} from "../utils/mdxUtils";

export default function Example({res}) {
  return(
    <div>This is an example component!</div>
  );
}

export async function getStaticProps() {
  const res = await getPostData()

  return {
    props: {
      res,
    },
  }
}