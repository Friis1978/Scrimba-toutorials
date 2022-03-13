import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from "react-confetti";
import Dice from "./Dice";

type DiceProps = {
  value: number;
  isHeld: boolean;
  id: string;
};

const App = () => {
  const { width, height } = useWindowSize()
  const DieValues = 10;

  const generateNewDice = () => {
    return {
      isHeld: false,
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
    };
  };

  const allNewDice = () => {
    const newDiceArray: DiceProps[] = [];
    for (let i = 0; i < DieValues; i++) {
      newDiceArray.push(generateNewDice());
    }
    return newDiceArray;
  };

  const [tenzies, setTenzies] = useState<boolean>(false);
  const [diceValues, setDiceValues] = useState<DiceProps[]>(allNewDice());

  useEffect(() => {
    // use 'every' func when check every value in a array
    const allHeld = diceValues.every((die) => die.isHeld);
    const firstValue = diceValues[0].value;
    const allSameValue = diceValues.every((die) => die.value === firstValue);
    allHeld && allSameValue && setTenzies(true);
  }, [diceValues]);

  const holdDice = (id: string) => {
    setDiceValues((oldDiceValues) =>
      oldDiceValues.map((val) =>
        val.id === id ? { ...val, isHeld: !val.isHeld } : { ...val }
      )
    );
  };

  const rollDice = () => {
    setDiceValues((oldDiceValues) =>
      oldDiceValues.map((val) => (!val.isHeld ? generateNewDice() : { ...val }))
    );
  };

  const startNewGame = () => {
    setTenzies(false)
    setDiceValues(allNewDice())
  }

  return (
    <main>
      {tenzies && <Confetti width={width} height={height} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">
        {diceValues.map((dice) => (
          <Dice key={dice.id} dice={dice} holdDice={() => holdDice(dice.id)} />
        ))}
      </div>
      <button className="roll-button" onClick={() => tenzies ? startNewGame() : rollDice()}>
        {tenzies ? "New game" : "Roll"}
      </button> 
    </main>
  );
};
export default App;
