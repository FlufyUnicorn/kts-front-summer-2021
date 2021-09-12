import React from "react";
import { ReposSearchPage } from "./pages/ReposSearchPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import RepoBranchesDrawer from "@components/RepoBranchesDrawer";
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/repos/:owner/:name" component={RepoBranchesDrawer}/>
        <Route exact path="/repos" component={ReposSearchPage} />
        <Redirect to="/repos" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
