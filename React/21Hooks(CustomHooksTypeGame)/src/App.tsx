import useWordGame from "./hooks/useWordGame";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame(20);

  return (
    <div>
      <h1 className="title">Word count</h1>
      <textarea
        ref={textBoxRef}
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text}
        rows={5}
      />
      <h4>{"Time remaining: " + timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>{`Word count: ${wordCount}`}</h1>
    </div>
  );
}
export default App;
