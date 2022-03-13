import React, {Component} from "react"
import { ThemeContextConsumer } from "./themeContext"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

// Or as a class component

/*
class Button extends Component {
    render() {
        const theme = this.context
        console.log(theme)
        return (
            <button className={`${theme + "-theme"}`}>Switch Theme</button>
        )    
    }
}
Button.contextType = ThemeContext
*/

export default Button