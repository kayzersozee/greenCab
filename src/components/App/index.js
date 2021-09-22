import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lightTheme, darkTheme, GlobalStyles } from "./../../themes";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import CarGo from "../CarGo";
import AccountPage from "../Account";
import Footer from "../Footer";
import withAuthentication from "../Session/withAuthentication";
import * as routes from "../../constants/routes";

import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <div className="app">

          <Navigation
            theme={theme}
            setTheme={setTheme}
          />
          <hr />
          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route exact path={"/home"} component={() => <CarGo />} />
          <Route
            exact
            path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
          <hr />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default withAuthentication(App);
