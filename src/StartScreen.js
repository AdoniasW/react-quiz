function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React quiz</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button>Let's start</button>
    </div>
  );
}

export default StartScreen;
