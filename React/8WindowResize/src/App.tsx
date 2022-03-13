import React, { useEffect } from "react";
import WindowTracker from "./components/WindowTracker";

const App = () => {
  const [show, setShow] = React.useState(true);

  useEffect(() => {}, []);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

  const ToggleContainer = () => {
    // Event listener on a component inside
    return (
      <div className="window--toggle--container"><button className="window--toggle" onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
      </div>
    )
  }

  return (
    <div className="App">
      {<ToggleContainer />}
    </div>
  );
};

export default App;
