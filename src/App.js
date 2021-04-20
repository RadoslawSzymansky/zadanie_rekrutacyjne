
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import "./App.less";

import Routes from './routing/Routes';
import MainLayout from './components/MainLayout/MainLayout';
 

class App extends Component {
  render(){
    return(
      <MainLayout>
        <Routes />
      </MainLayout>
    );
  }
}

export default hot(module)(App);