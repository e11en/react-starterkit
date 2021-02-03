import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "pages/HomePage";

export default () => {
  return (
    <Switch>
      <Route component={HomePage} path="/" exact />
    </Switch>
  );
};
