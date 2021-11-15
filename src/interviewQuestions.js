import { useState } from "react";
const InterviewQuestions = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row-reverse"
      }}
    >
      <div>{"Count: " + count}</div>
      <button onClick={() => setCount(count + 1)}>Count++</button>
    </div>
  );
};

export default InterviewQuestions;
