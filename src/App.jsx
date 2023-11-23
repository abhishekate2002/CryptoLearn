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
import Sha256 from "./Learning/sha/Sha256";
import BasicCryptData from "./Learning/BasicCrypt/BasicCryptData";
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
          <Route path="/learn" exact>
            <Learn />
          </Route>
          <Route path="/learn/sha256" component={Sha256} />
          <Route path="/learn/basic" component={BasicCryptData} />

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
