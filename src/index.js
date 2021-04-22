import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Router } from 'react-router-dom';
import history from './utils/history';
import SimpleReactLightbox from 'simple-react-lightbox'


ReactDOM.render(
  <Router history={history} basename={process.env.PUBLIC_URL}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Router>
  , document.getElementById("root"));