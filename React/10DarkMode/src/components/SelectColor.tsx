import React, { useState } from "react";

const SelectColorTheme = ({ shiftColor }: any) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToogle = () => {
    setDarkTheme(!darkTheme);
    shiftColor(!darkTheme);
  };

  return (
    <div className={`flex flex-row items-center ${darkTheme && "text-white"}`}>
      <p>{"Light"}</p>
      <label className="flex items-center cursor-pointer px-2">
        <div className="relative">
          <input
            id="toogleA"
            type="checkbox"
            className="toggle-checkbox sr-only"
          />

          <div
            className={`line w-8 h-4 rounded-full`}
            onClick={handleToogle}
          ></div>

          <div
            className={`dot absolute w-toogle h-toogle rounded-full border bg-primary left-0.5 top-toogle-padding transition`}
            onClick={handleToogle}
          ></div>
        </div>
      </label>
      <p className={`-mr-4 ${darkTheme ? "text-white" : "text-gray-400"}`}>
        {"Dark"}
      </p>
    </div>
  );
};
export default SelectColorTheme;
