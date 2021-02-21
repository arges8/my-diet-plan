import { Fragment } from "react";
import "./App.css";
import Sidebar from "./shared/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Plan from "./plan/Plan";
import Recipes from "./recipes/Recipes";

function App() {
  return (
    <Fragment>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/plan" component={Plan} />
          <Route path="/recipes" component={Recipes} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
