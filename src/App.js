import {Fragment} from 'react';
import './App.css';
import Plan from './plan/Plan';
import Recipes from './recipes/Recipes';
import Sidebar from './shared/Sidebar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
