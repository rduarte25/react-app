import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Logo from "../logo.svg";
import { routes } from "./routes";

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
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
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
          <Routes>
            {routes.map(({path, Component}) => (
              <Route key={ 'route' + path} path={path} element={<Component/>}></Route>
            ))}
            <Route path="*" element={<Navigate to={routes[0].path}/>} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};
