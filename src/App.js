import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./assets/prifina.svg";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Image from "./assets/fingerpori.png";

import { usePrifina } from "@prifina/hooks";
import Faker from "@prifina/faker";

import { ThemeProvider } from "@blend-ui/core";

import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Graphs from "./pages/Graphs";
import Error from "./pages/Error";

import Widgets from "./pages/Widgets";

export const App = () => {
  return (
    <React.Fragment>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path="/" exact component={Dashboard} />
            <Route path="/graphs" exact component={Graphs} />
            <Route path="/widgets" exact component={Widgets} /> {/*Added Widgets Page for Testing Widgets*/}
            <Route component={Error} />
          </Switch>
          
        </ThemeProvider>
      </Router>
    </React.Fragment>
  );
};
