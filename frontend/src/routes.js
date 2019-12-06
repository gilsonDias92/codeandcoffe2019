import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

// exportando as rotas do front
export default function Routes() {
  return (
    <BrowserRouter>
      {/* // Switch permite q apenas uma rota seja executada por vez  */}
      <Switch>
          {/* só chama rota se for exatamente esse */}
          <Route path="/" exact component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/new" component={New}/>
      </Switch>
    </BrowserRouter>
  );
}
