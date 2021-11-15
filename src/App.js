import './App.css';
import InterviewQuestions from './interviewQuestions.js'
function App() {
  const title = 'Welcome to JS Interview'
  const source = 'https://www.youtube.com/watch?v=gnkrDse9QKc&ab_channel=BenAwad'
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <a href={source}>Ben Awad JS Interview</a>
      </div>
      <InterviewQuestions/>
    </div>
  );
}

export default App;
