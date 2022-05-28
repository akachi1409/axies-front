// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
//import components
// import Header from './components/header/header';
// import Team from './components/team/team';
// import JoinCommunity from './components/join-community/join-community';
// import Footer from './components/footer/footer';
// import RoadMap from './components/roadmap/roadmap';
// import TopItems from './components/top-items/top-items';
// import Mint from './components/mint/mint';
// import About from './components/about/about';

import Login from './page/auth/login';
import Signup from './page/auth/signup';

import Help from "./page/normal/help"
import Blog from "./page/normal/blog"

import Acticity1 from "./page/activity/activity1.js"
// import Signup
function App() {
  return (
    <React.Suspense >
      <Router>
        <Switch>
          <Route exact path = "/login">
            <Login/>
          </Route>
          <Route exact path = "/signup">
            <Signup/>
          </Route>
          <Route exact path = "/help">
            <Help/>
          </Route>
          <Route exact path = "/blog">
            <Blog/>
          </Route>
          <Route exact path = "/activity1">
            <Acticity1/>
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
