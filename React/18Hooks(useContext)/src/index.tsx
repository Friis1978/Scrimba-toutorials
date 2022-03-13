import ReactDOM from "react-dom"
import './styles.css';

import App from "./App"
import {ThemeContextProvider} from "./themeContext"

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>, 
    document.getElementById("root")
)
