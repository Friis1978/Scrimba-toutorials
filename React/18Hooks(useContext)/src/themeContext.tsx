import { useState, createContext } from "react";

type ContextProps = {
  theme: string;
  toggleTheme?: () => void;
};

const defaultValues: ContextProps = {
  theme: "dark",
};

const ThemeContext = createContext(defaultValues);

const ThemeContextProvider = (props: any) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
