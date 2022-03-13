/*
  React Context

  1. Don't use context just to avoid prop drilling a layer or two down.
    - React suggest not using it to avoid prop drilling at all in a certain circumstances
    https://reactjs.org/docs/context.html#before-you-use-context

  2. Don't use context for state that should just be kept locally (e.g. forms)
  3. Wrap the provider around the lowest common parent in the tree
  4. Passing object as value, watch performance and refactor if necessary

 */

import React from "react";

import Header from "./Header";
import Button from "./Button";
import { ThemeContextConsumer } from "./themeContext";

class App extends React.Component {
  state = {
    newUsername: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  // Uncaught ReferenceError: UserContext is not defined
  render() {
    return (
      <div>
        <Header />
        <Button />
        <main>
          <ThemeContextConsumer>
            {(context) => (
              <>
                <p className="main">
                  No new notifications, {context.username}! 🎉
                </p>
                <input
                  type="text"
                  name="newUsername"
                  placeholder="New username"
                  value={this.state.newUsername}
                  onChange={this.handleChange}
                />
                <button
                  onClick={() => context.saveUsername(this.state.newUsername)}
                >
                  Change Username
                </button>
              </>
            )}
          </ThemeContextConsumer>
        </main>
      </div>
    );
  }
}

export default App;
