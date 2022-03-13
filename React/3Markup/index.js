import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img alt="react logo" src="./images/react.png" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

//ReactDOM.render(page,document.getElementById("root"))

// We could also just write a fuction, and show this in the DOM
function TemporaryName() {
  return (
    <div>
      <img src="./images/react.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function NewPage() {
  return (
    <div>
      <header>
        <nav>
          <img src="./images/react.png" width={50} />
        </nav>
      </header>
      <h1>The basic page</h1>
      <ol>
        <li>main reasons to learn react</li>
        <li>This a second list element</li>
      </ol>
      {TemporaryName()}
      <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<NewPage />, document.getElementById("root"));
