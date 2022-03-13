/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

type CanvasSize = {
  width: number;
  height: number;
};

type Intruction = "L" | "F" | "R";
type Instructions = Array<Intruction>;

type Position = {
  x: number;
  y: number;
  position: string;
};

type Program = {
  Size: CanvasSize;
  Instructions: Instructions;
  StartPosition: Position;
  CurrentPosition: Position;
};

type Task = {
  index: number;
  programs: Program[];
};

const Home: NextPage = () => {
  // Canvas Settings
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const strokeColor = "#0170F3";
  const fillColor = "#003779";
  const robotSpeed = 1;
  const program = 1;
  const startPos = {
    x: 1,
    y: 2,
    position: "N",
  }
  const startSize = { width: 5, height: 5 }

  const [running, setRunning] = useState<boolean>(false);
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const [defaultValues, setDefaultValues] = useState<Position>(startPos);
  const [defaultSize, setDefaultSize] = useState<CanvasSize>(startSize);

  const getPrograms = (reset?: boolean):Program[] => {
    const Programs: Program[] = [
      {
        Size: !reset && defaultSize ? defaultSize : startSize,
        Instructions: ["R", "F", "R", "F", "F", "R", "F", "R", "F", "F"],
        StartPosition: !reset && defaultValues ? defaultValues : startPos,
        CurrentPosition: !reset && defaultValues ? defaultValues : startPos,
      },
      {
        Size: { width: 5, height: 5 },
        Instructions: ["R", "F", "L", "F", "F", "L", "R", "F"],
        StartPosition: !reset && defaultValues ? defaultValues : startPos,
        CurrentPosition: !reset && defaultValues ? defaultValues : startPos,
      },
    ];
    return Programs
  }

  const [currentTask, setCurrentTask] = useState<Task>({
    index: 0,
    programs: getPrograms(),
  });

  useEffect(() => {
    const canvas = canvasRef?.current;
    const ctx = canvas?.getContext("2d");

    const programIndex = program - 1;
    if (canvas && ctx) {
      console.log("draw");
      ctx.resetTransform();
      ctx.clearRect(0, 0, canvas.width + 20, canvas.height + 20);
      Draw(ctx, currentTask.programs[programIndex].CurrentPosition);
    }
    console.log(
      "step",
      currentTask.index,
      currentTask.programs[programIndex].CurrentPosition
    );
    const instructions = currentTask.programs[programIndex].Instructions;
    const currentInstruction = instructions[currentTask.index];
    if (!currentInstruction){
      ResetValues()
      return setShowStatus(true);
    } 

    if (
      running &&
      currentTask.index < instructions.length &&
      currentInstruction
    ) {
      console.log("instruction", currentInstruction);
      const newTask = { ...currentTask };
      const newPosition = getNewPosition(
        currentTask.programs[programIndex].CurrentPosition,
        currentInstruction
      );
      newTask.index = currentTask.index + 1;
      newTask.programs[programIndex].CurrentPosition = newPosition;
      setTimeout(() => {
        setCurrentTask(newTask);
      }, robotSpeed * 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask, running]);

  useEffect(() => {
    setCurrentTask({
      index: 0,
      programs: getPrograms(),
    })   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues, defaultSize]);

  const getNewPosition = (
    position: Position,
    instruction: Intruction
  ): Position => {
    let newPosition = { ...position };
    switch (instruction) {
      case "F": {
        newPosition = MoveForward(position);
        break;
      }
      case "L": {
        newPosition = TurnLeft(position);
        break;
      }
      case "R": {
        newPosition = TurnRight(position);
        break;
      }
      default:
        break;
    }
    return newPosition;
  };

  const ResetValues = () => {
    setCurrentTask({
      index: 0,
      programs: getPrograms(true),
    })
    setRunning(false)
  }

  const MoveForward = (position: Position) => {
    const newPosition = { ...position };
    if (position.position === "N") newPosition.x += -1;
    if (position.position === "S") newPosition.x += 1;
    if (position.position === "W") newPosition.y += -1;
    if (position.position === "E") newPosition.y += 1;
    return newPosition;
  };

  const TurnLeft = (position: Position) => {
    const newPosition = { ...position };
    if (position.position === "N") newPosition.position = "W";
    if (position.position === "S") newPosition.position = "E";
    if (position.position === "W") newPosition.position = "S";
    if (position.position === "E") newPosition.position = "N";
    return newPosition;
  };

  const TurnRight = (position: Position) => {
    const newPosition = { ...position };
    if (position.position === "N") newPosition.position = "E";
    if (position.position === "S") newPosition.position = "W";
    if (position.position === "W") newPosition.position = "N";
    if (position.position === "E") newPosition.position = "S";
    return newPosition;
  };

  const DrawAxis = (
    ctx: CanvasRenderingContext2D,
    grid_size: number,
    canvas_width: number,
    canvas_height: number
  ) => {
    // Draw grid lines along X-axis
    for (var i = 0; i <= currentTask.programs[program].Size.width; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#e9e9e9";

      if (i == currentTask.programs[program].Size.width) {
        ctx.moveTo(0, grid_size * i);
        ctx.lineTo(canvas_width, grid_size * i);
      } else {
        ctx.moveTo(0, grid_size * i + 0.5);
        ctx.lineTo(canvas_width, grid_size * i + 0.5);
      }
      ctx.stroke();
    }

    // Draw grid lines along Y-axis
    for (i = 0; i <= currentTask.programs[program].Size.height; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#e9e9e9";

      if (i == currentTask.programs[program].Size.height) {
        ctx.moveTo(grid_size * i, 0);
        ctx.lineTo(grid_size * i, canvas_height);
      } else {
        ctx.moveTo(grid_size * i + 0.5, 0);
        ctx.lineTo(grid_size * i + 0.5, canvas_height);
      }
      ctx.stroke();
    }
  };

  const DrawRobot = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    position: string
  ) => {
    const img = document.getElementById("robot") as CanvasImageSource;
    const xPosition = x-50
    console.log(xPosition)
    if (img) {
      ctx.setTransform(0.2, 0, 0, 0.2, x-50, y-50); // sets scale and origin
      let rotate = 0;
      console.log("position", position);
      switch (position) {
        case "N": {
          break;
        }
        case "E": {
          rotate = Math.PI / 2;
          break;
        }
        case "S": {
          rotate = -Math.PI;
          break;
        }
        case "W": {
          rotate = -Math.PI / 2;
          break;
        }
        default:
          break;
      }
      ctx.rotate(rotate);
      ctx.drawImage(img, -img.width / 4, -img.height / 2);
    }
  };

  const Draw = (ctx: CanvasRenderingContext2D, currentPosition: Position) => {
    const { x, y, position } = currentPosition;
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;

    const canvas_width = currentTask.programs[program].Size.width * 100;
    const canvas_height = currentTask.programs[program].Size.height * 100;
    const robot_size = currentTask.programs[program].Size.width * 10;
    DrawAxis(ctx, robot_size, canvas_width, canvas_height);
    DrawRobot(
      ctx,
      x * robot_size,
      y * robot_size,
      position
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>The robot game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Robot program</h1>
        <div className={styles.row}>
          <label className="label" htmlFor="location-x">
            X:
          </label>
          <input
            id="location-x"
            value={defaultValues.x}
            onChange={(val) => {
              console.log(val.target.value);
              const newValues = { ...defaultValues }
              newValues.x = Number(val.target.value)
              setDefaultValues(newValues)
            }}
          />
          <label className="label" htmlFor="location-y">
            Y:
          </label>
          <input
            id="location-y"
            value={defaultValues.y}
            onChange={(val) => {
              console.log(val.target.value);
              const newValues = { ...defaultValues }
              newValues.y = Number(val.target.value)
              setDefaultValues(newValues)
            }}
          />
        </div>
        <div className={styles.row}>
          <label className="label" htmlFor="size">
            Size Width:
          </label>
          <input
            id="size"
            value={defaultSize.width}
            onChange={(val) => {
              console.log(val.target.value);
              const newValues = { ...defaultSize }
              newValues.width = Number(val.target.value)
              setDefaultSize(newValues)
            }}
          />
          <label className="label" htmlFor="size">
            Size Height:
          </label>
          <input
            id="size"
            value={defaultSize.height}
            onChange={(val) => {
              console.log(val.target.value);
              const newValues = { ...defaultSize }
              newValues.height = Number(val.target.value)
              setDefaultSize(newValues)
            }}
          />
          <label className="label" htmlFor="direction">
            Direction:
          </label>
          <input
            id="direction"
            value={defaultValues.position}
            onChange={(val) => {
              console.log(val.target.value);
              const newValues = { ...defaultValues }
              newValues.position = val.target.value
              setDefaultValues(newValues)
            }}
          />
        </div>
        <div className={styles.row}>
          <button onClick={() => {setRunning(true); setShowStatus(false)}}>Start</button>
          <button onClick={() => {setRunning(false); ResetValues()}}>Stop</button>
          <button onClick={() => ResetValues()}>Reset</button>
        </div>
        <canvas
          ref={canvasRef}
          width={currentTask.programs[program - 1].Size.width * 50}
          height={currentTask.programs[program - 1].Size.height * 50}
          style={{ border: "1px solid black" }}
        />
        <div style={{ display: "none" }}>
          <img
            id="robot"
            alt="robot"
            src="robot.svg"
            width={"10px"}
            height={"10px"}
          />
        </div>
        {showStatus && (
          <>
            <p>Status results:</p>
            <div className={styles.row}>
              <div>
                x: {currentTask.programs[program - 1].CurrentPosition.x}
              </div>
              <div>
                y: {currentTask.programs[program - 1].CurrentPosition.y}
              </div>
              <div>
                direction:{" "}
                {currentTask.programs[program - 1].CurrentPosition.position}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
