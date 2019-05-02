import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import MainPage from "./views/main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
