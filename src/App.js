// import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import Home from "./page/home/home";
import Login from "./page/auth/login";
import Signup from "./page/auth/signup";

import Help from "./page/normal/help";
import Blog from "./page/normal/blog";
import BlogDetails from "./page/normal/blogDetails";
import Acticity1 from "./page/activity/activity1.js";
import Activity2 from "./page/activity/activity2.js";

import Explore1 from "./page/explore/explore1";
import Explore2 from "./page/explore/explore2";
import Explore3 from "./page/explore/explore3";
import Explore4 from "./page/explore/explore4";

import CreateItem from "./page/item/createItem";

import Auction from "./page/auction/auction";
import ConnectWallet from "./page/wallet/connetWallet";
// import Signup
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/help" element={<Help />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/activity1" element={<Acticity1 />}></Route>
          <Route exact path="/activity2" element={<Activity2 />}></Route>
          <Route exact path="/blog_details" element={<BlogDetails />}></Route>
          <Route exact path="/explore1" element={<Explore1 />}></Route>
          <Route exact path="/profile" element={<Explore2 />}></Route>
          <Route exact path="/explore2" element={<Explore3 />}></Route>
          <Route exact path="/explore4" element={<Explore4 />}></Route>
          <Route exact path="/create_item" element={<CreateItem />}></Route>
          <Route exact path="/auction" element={<Auction />}></Route>
          <Route
            exact
            path="/connect_wallet"
            element={<ConnectWallet />}
          ></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
