import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Logo from "../logo.svg";
import { LazyPage1 } from "../pages";
import { LazyPage2 } from "../pages";
import { LazyPage3 } from "../pages";

export const Navigator = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/lazy1"
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/lazy2"
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/lazy3"
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/lazy1" element={<LazyPage1 />}></Route>
          <Route path="/lazy2" element={<LazyPage2 />}></Route>
          <Route path="/lazy3" element={<LazyPage3 />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <h1>Home</h1>
  );
}
