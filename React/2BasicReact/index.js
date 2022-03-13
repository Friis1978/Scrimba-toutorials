import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <h1>Welcome to react</h1>
        <p>This will live code our react app</p>
    </div>
)

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(page,document.getElementById("root"))
//document.getElementById("root").append(JSON.stringify(page))