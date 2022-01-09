import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Logo from "../logo.svg";
import { routes } from "./routes";
import { Redirect } from 'react-router-dom';

export const Navigator = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={Logo} alt="React Logo" />
            <ul>
              {routes.map(({path, name}) => (
                <li key={'li-' + path}>
                  <NavLink
                    key={ 'navlink-' + path}
                    activeClassName="nav-active"
                    to={path}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({path, Component}) => (
              <Route key={ 'route' + path} path={path} ><Component/></Route>
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
};
