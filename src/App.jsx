import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Body from "./Dashboard/Body";
import History from "./History/History";
import Tools from "./Tool/Tools";
import Aboutme from "./AboutMe/Aboutme";
import Learn from "./Learning/Learn";
function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Body></Body>
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/tool">
            <Tools></Tools>
          </Route>
          <Route path="/aboutme">
            <Aboutme></Aboutme>
          </Route>
          <Route path="/learning">
            <Learn></Learn>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
