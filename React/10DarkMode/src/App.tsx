import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="App">
      {<Header setDarkMode={(darkMode:boolean)=>setDarkTheme(darkMode)}/>}
      {<Main darkMode={darkTheme}/>}
    </div>
  );
};

export default App;
