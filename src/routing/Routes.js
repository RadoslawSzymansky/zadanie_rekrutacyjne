import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageAbout from '../Pages/PageAbout/PageAbout';
import PageHome from '../Pages/PageHome/PageHome';
import Page404 from '../Pages/Page404/Page404';
import PageMovie from '../Pages/PageMovie/PageMovie';

const Routes = () => {

  return (
    <Switch>
      <Route exact={true} path="/">
        <PageHome />
      </Route>
      <Route exact={true} path="/about-me">
        <PageAbout />
      </Route>
      <Route exact path="/movies/:movieId">
        <PageMovie />
      </Route>
      <Route  path="*">
        <Page404 />
      </Route>

    </Switch>
  );
};

export default Routes;