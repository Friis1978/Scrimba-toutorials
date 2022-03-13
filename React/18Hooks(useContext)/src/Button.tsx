import { useContext } from "react"
import {ThemeContext} from "./themeContext"

function Button() {
    const context = useContext(ThemeContext)
    return (
        <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
    )    
}

export default Button