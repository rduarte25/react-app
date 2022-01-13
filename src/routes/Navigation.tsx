import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import ShoppingPage from "../components-patters/pages/ShoppingPage";
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
                exact
                activeClassName="nav-active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="nav-active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="nav-active"
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <ShoppingPage />
          </Route>
          <Route path="/about" component={() => (<h2>About</h2>)}><h2>About</h2></Route>
          <Route path="/users" component={() => (<h2>Users</h2>)}>{() => (<h2>Users</h2>)}</Route>
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
};