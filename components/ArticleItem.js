import Link from "next/link";
import problemstyles from "../styles/problem.module.css";

const problemItem = ({ problem }) => {
  return (
    <Link href="/problem/[id]" as={`/problem/${problem.id}`}>
      <a className={problemstyles.card}>
        <h3>{problem.title}&rarr;</h3>
        <p>{problem.body}</p>
      </a>
    </Link>
  );
};

export default problemItem;
