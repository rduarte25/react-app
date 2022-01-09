import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
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
                activeClassName="nav-active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="nav-active"
                to="/lazy1"
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="nav-active"
                to="/lazy2"
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="nav-active"
                to="/lazy3"
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lazy1"></Route>
          <Route path="/lazy2"></Route>
          <Route path="/lazy3"></Route>
          <Redirect path="*" to="/lazy1" />
        </Switch>
      </div>
    </Router>
  );
};