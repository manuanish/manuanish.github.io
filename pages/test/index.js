import {getPostData} from "../../utils/mdxUtils";

export default function Test({res}){
  return(
    <div>
      ok <br/> {res}
    </div>
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
