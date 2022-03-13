import { useState, useEffect, useRef } from "react";

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(0);
  const [timeRemaining, setTimeRemaining] = useState<number>(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);

  const textBoxRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [endGame, isTimeRunning, timeRemaining]);

  function startGame() {
    setIsTimeRunning(true);
    setWordCount(0);
    setTimeRemaining(STARTING_TIME);
    setText("");
    if (textBoxRef && textBoxRef.current) {
      textBoxRef.current.disabled = false;
      textBoxRef.current.focus();
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  function handleChange(e: any) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text: string) {
    const wordsArr = text.trim().split(" ");
    console.log("value:", wordsArr.filter((word) => word !== "").length);
    return wordsArr.filter((word) => word !== "").length;
  }

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
