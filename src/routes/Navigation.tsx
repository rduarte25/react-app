import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Logo from "../logo.svg";

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
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "nav-active" : "")}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

const About = () => {
  return (
    <h1>About</h1>
  );
}

const Users = () => {
  return (
    <h1>Users</h1>
  );
}

const Home = () => {
  return (
    <h1>Home</h1>
  );
}
