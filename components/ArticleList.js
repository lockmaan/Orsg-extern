import problemItem from "./problemItem";
import problemstyles from "../styles/problem.module.css";

const problemList = ({ problems }) => {
  return (
    <div className={problemstyles.grid}>
      {problems.map((problem) => (
        <problemItem key={problem.id} problem={problem} />
      ))}
    </div>
  );
};

export default problemList;
