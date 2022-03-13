import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import Settings from "./Settings";
import Info from "./Info";

function Profile() {
  const match = useRouteMatch();
  console.log(match);

  /* 
        Using useRouteMatch will get the router path leading to this place,
        where we can then use it to make the route dynamic, 
        so we can use whatever path we want instead of using the filename.

        https://reacttraining.com/blog/react-router-v5-1/#useroutematch
    */

  // {
  //     path: "/user",
  //     url: "/user",
  //     isExact: true,
  //     params: {}
  // }

  return (
    <div className="page">
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${match.url}/info`}>Profile Info</Link>
        </li>
        <li>
          <Link to={`${match.url}/settings`}>Profile Settings</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/info`}>
          <Info />
        </Route>
        <Route path={`${match.path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
