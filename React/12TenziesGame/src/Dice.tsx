import React from "react";

type DiceProps = {
  value: number;
  isHeld: boolean;
  id: string;
};

type Props = {
  dice: DiceProps;
  holdDice: (id:string) => void;
};


const Dice = ({ dice, holdDice }: Props) => {
  return (
    <div className={`die-face ${dice.isHeld && 'die-hold'}`} onClick={() => holdDice(dice.id)}>
      <h2 className="die-num">{dice.value}</h2>
    </div>
  );
};
export default Dice;
