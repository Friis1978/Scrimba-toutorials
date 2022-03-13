import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="">
      <div className="flex flex-row w-full">
        <Link className="bg-slate-100 hover:bg-slate-300 p-5" to="/">
          Home
        </Link>
        <Link className="bg-slate-100 hover:bg-slate-300 p-5" to="/about">
          About
        </Link>
      </div>

      <Switch>
        {/* Old method With render props
          <Route exact path="/" render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
        */}

        {/* Old Method Without props
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        */}
        
        {/* The new method working from v.5.12*/}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
