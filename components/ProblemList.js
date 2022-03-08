import ProblemItem from "./ProblemItem";
import problemstyles from "../styles/problem.module.css";

const ProblemList = ({ problems }) => {
  return (
    <div className={problemstyles.grid}>
      {problems.map((problem) => (
        <ProblemItem key={problem.id} problem={problem} />
      ))}
    </div>
  );
};

export default ProblemList;
