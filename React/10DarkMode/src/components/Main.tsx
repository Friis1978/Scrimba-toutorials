import React from "react";

type Props = {
  darkMode: boolean
}

const Main = ({darkMode}:Props) => {
  return (
    <main className={`${darkMode && 'bg-secondary text-white'}`}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>
            <span className="inline-block align-top">Was first released in 2013</span>
        </li>
        <li>
          <p>Was originally created by Jordan Walke</p>
        </li>
        <li>
          <p>Has well over 100K stars on GitHub</p>
        </li>
        <li>
          <p>Is maintained by Facebook</p>
        </li>
        <li>
          <p>Powers thousands of enterprise apps, including mobile apps</p>
        </li>
      </ul>
    </main>
  );
};

export default Main;
