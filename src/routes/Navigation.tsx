import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { RegisterPage } from '../forms/pages/RegisterPage';
import { FormikBasicPage } from "../forms/pages/FormikBasicPage";

import Logo from "../logo.svg";
import { FormikYupPage } from "../forms/pages/FormikYupPage";
import { FormikComponentsPage } from "../forms/pages/FormikComponentsPage";
import { FormikAbstractionPage } from "../forms/pages/FormikAbstractionPage";

export const Navigator = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={Logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                className={ ({isActive}) => ( isActive ? "nav-active" : "") }
                to="/register"
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                className={ ({isActive}) => ( isActive ? "nav-active" : "") }
                to="/formik-basic"
              >
                Formik - Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                className={ ({isActive}) => ( isActive ? "nav-active" : "") }
                to="/formik-yup"
              >
                Formik - YUP
              </NavLink>
            </li>
            <li>
              <NavLink
                className={ ({isActive}) => ( isActive ? "nav-active" : "") }
                to="/formik-components"
              >
                Formik - Components
              </NavLink>
            </li>
            <li>
              <NavLink
                className={ ({isActive}) => ( isActive ? "nav-active" : "") }
                to="/formik-abstraction"
              >
                Formik - Abstraction
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage/>} />
          <Route path="/formik-yup" element={<FormikYupPage/>} />
          <Route path="/formik-components" element={<FormikComponentsPage/>} />
          <Route path="/formik-abstraction" element={<FormikAbstractionPage/>} />
        </Routes>
      </div>
    </Router>
  );
};