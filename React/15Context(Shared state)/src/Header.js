import React, {Component} from "react"
import { ThemeContextConsumer } from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme + "-theme"}`}>
                    <h2>{context.theme === "light" ? "Light" : "Dark"} Theme</h2>
                    <p>Welcome, {context.username}!</p>
                </header>
            )}
        </ThemeContextConsumer>
    )    
}

// Or as a class component

/*
class Header extends Component {
    static contextType = ThemeContext
    render() {
        const theme = this.context
        return (
            <header className={`${theme + "-theme"}`}>
                <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            </header>
        )    
    }
}
*/

// Same as static import
// Header.contextType = ThemeContext

export default Header