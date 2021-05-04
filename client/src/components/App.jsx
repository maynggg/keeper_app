import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("accessToken") !== null);

  const handleLogin = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  }

  const handleSignup = (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    setIsAuthenticated(true);
  }

  return (
    <Router>
      { isAuthenticated ? (
        <Switch>
          <Route path="/home">
            <HomePage onLogout={handleLogout}/>
          </Route>
          <Redirect to="/home"/>
        </Switch>
      ) : (
        <Switch>
          <Route path="/login">
            <LoginPage 
              onLoginSuccess={handleLogin}
            />
          </Route>
          <Route path="/signup">
            <SignupPage 
              onSignupSuccess={handleSignup}
            />
          </Route>
          <Redirect to="/login"/>
        </Switch>
      )}
      <ToastContainer autoClose={3000} />
    </Router>
  )
}

export default App;
