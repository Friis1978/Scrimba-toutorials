import React, { useState } from "react";
import SelectColorTheme from "./SelectColor";

type Props = {
  setDarkMode: (darkMode:boolean) => void
}

const Header = ({ setDarkMode }: Props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-10 text-sm ${
        darkTheme ? "bg-secondary text-white" : "bg-white"
      }`}
    >
      <div>
        <div className="shadow-md px-5">
          <div className="flex justify-between max-w-6xl mx-auto px-5">
            <div className="flex flex-row items-center">
              <img className="w-8" src="/logo.png" alt="" />
              <a href="/" className="inline-flex">
                <p className="text-xl pl-4 py-5 text-primary">ReactFacts</p>
              </a>
            </div>
            {
              <SelectColorTheme
                shiftColor={(darkMode: boolean) => {
                  setDarkMode(darkMode)
                  setDarkTheme(darkMode);
                }}
              />
            }
          </div>
        </div>
        <div className="flex flex-row justify-between max-w-6xl mx-auto mt-2 px-10"></div>
      </div>
    </nav>
  );
};
export default Header;
