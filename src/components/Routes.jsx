import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Producers from "./Producers";
import AvailableBeats from "./AvailableBeats";
import UploadBeat from "./UploadBeat";

function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beats">Beats</Link>
            </li>
            <li>
              <Link to="/upload-beat">New Beat</Link>
            </li>
            <li>
              <Link to="/producers">Producers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/producers">
            <Producers />
          </Route>
          <Route path="/beats">
            <AvailableBeats />
          </Route>
          <Route path="/upload-beat">
            <UploadBeat />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
