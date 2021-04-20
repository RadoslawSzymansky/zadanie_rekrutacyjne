import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Router } from 'react-router-dom';
import history from './utils/history';

ReactDOM.render(
  <Router history={history} basename={process.env.PUBLIC_URL}>
    <App />
  </Router>
  , document.getElementById("root"));