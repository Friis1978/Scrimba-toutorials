import React, {useState} from "react"
import {Link, Switch, Route, Redirect} from "react-router-dom"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    /*
        The Redirect hook will allow you to redirect automatically to a new location,
        this could fx be used to send the user to the login page, if they are not logged in yet.

        https://reacttraining.com/react-router/web/example/auth-workflow
    */
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/private">Private</Link>
            
            <Switch>
                <Route exact path="/">
                    <h1>Home page, anyone is allowed here</h1>
                </Route>
                <Route path="/private">
                    {
                        isLoggedIn ?
                        <h1>Protected page, must be logged in to be here</h1> :
                        <Redirect to="/login" />
                    }
                </Route>
                <Route path="/login">
                    <button onClick={() => setIsLoggedIn(true)}>Log in</button>
                </Route>
            </Switch>
        </div>
    )
}

export default App