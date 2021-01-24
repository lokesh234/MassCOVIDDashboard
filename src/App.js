import './App.css';
import Sidebar from "./Components/Sidebar";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import State from "./Pages/State";
import React from "react";
import Counties from "./Pages/Counties";
import Town from "./Pages/Town";

function App() {
  return (
      <>
          <Router>
              <Sidebar/>
              <Switch>
                  <Route path={'/'} exact component={State}/>
                  <Route path={'/counties'} component={Counties}/>
                  <Route path={'/towns'} component={Town}/>
              </Switch>
          </Router>
      </>
  );
}

export default App;
