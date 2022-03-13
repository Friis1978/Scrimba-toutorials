import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/services">Services</Link></li>
            </ul>
        </header>
    )
}

export default Header