function ProgressBar({
  index,
  numQuestions,
  points,
  maxPOssiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPOssiblePoints}
      </p>
    </header>
  );
}

export default ProgressBar;
