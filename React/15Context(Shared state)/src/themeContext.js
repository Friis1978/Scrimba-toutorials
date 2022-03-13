import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "dark",
    username: "no name"
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light",
      };
    });
  };

  saveUsername = (name) => {
    this.setState(() => {
      return {
        username: name,
      };
    });
  };

  render() {
    return (
      <Provider value={{username: this.state.username, theme: this.state.theme, toggleTheme: this.toggleTheme, saveUsername: this.saveUsername}}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
