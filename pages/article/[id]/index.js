import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  // const router = useRouter()
  // const {id} = router.query  /*{id}*/
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
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
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  /*paths:{params:{id:'1',id:}}*/
  return {
    paths,
    fallback: false,
  };
};

export default article;
