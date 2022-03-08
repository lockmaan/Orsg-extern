import Head from "next/head";
import ProblemList from "../components/ProblemList";

export default function Home({ problems }) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web, developement, programming" />
      </Head>
      <ProblemList problems={problems} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const problems = await res.json();
  return {
    props: {
      problems,
    },
  };
};