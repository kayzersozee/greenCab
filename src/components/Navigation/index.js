import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut";
import * as routes from "../../constants/routes";

const Navigation = ({ theme, setTheme }, { authUser }) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div>
      {authUser ? (
        <NavigationAuth themeToggler={themeToggler} />
      ) : (
        <NavigationNonAuth themeToggler={themeToggler} />
      )}
    </div>
  );
};

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = ({ themeToggler }) => {
  return (
      <ul>
        <li>
          <Link to={routes.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
        <li>
          <button
            onClick={() => {
              themeToggler();
            }}
          >
            MODE
          </button>
        </li>
      </ul>
  );
};

const NavigationNonAuth = ({ themeToggler }) => (
    <ul>
      <li>
        <Link to={routes.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={routes.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <button
          onClick={() => {
            themeToggler();
          }}
        >
          MODE
        </button>
      </li>
    </ul>
);

export default Navigation;
