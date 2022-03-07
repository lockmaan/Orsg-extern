import { problems } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filtered = problems.filter((problem) => problem.id === id);
  if (filtered.length > 0) {
    res.status(200).json(problems);
  } else {
    res
      .status(404)
      .json({ message: `problem with the id of ${id} is not found` });
  }
}
