import Link from "next/link";
import { useRouter } from "next/router";
import PDF from "../../../components/PDF";

const problem = ({ problem }) => {
  // const router = useRouter()
  // const {id} = router.query  /*{id}*/
  return (
    <>
      <h1>{problem.title}</h1>
      <p>{problem.body}</p>
      <PDF />
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};
//getServerSideProps is used with big data , is sligtly slower since it isn't run at build time
// getStaticProps however is static and so it is run at build time, it requires getting all the data but it's faster
export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const problem = await res.json();

  return {
    props: {
      problem,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const problems = await res.json();

  const ids = problems.map((problem) => problem.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  /*paths:{params:{id:'1',id:}}*/
  return {
    paths,
    fallback: false,
  };
};

export default problem;
