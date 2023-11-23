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
import Section1 from "./Learning/sha/sections/Section1/Section1";
import Section2 from "./Learning/sha/sections/Section2/Section2";
import Section3 from "./Learning/sha/sections/Section3/Section3";
import Section4 from "./Learning/sha/sections/Section4/Section4";
import Section5 from "./Learning/sha/sections/Section5/Section5";
import Section6 from "./Learning/sha/sections/Section6/Section6";
import Section7 from "./Learning/sha/sections/Section7/Section7";
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
          <Route path="/learn/sha256" component={Sha256} exact />
          <Route path="/learn/basic" component={BasicCryptData} />
          <Route path="/learn/sha256/section1" component={Section1} />
          <Route path="/learn/sha256/section2" component={Section2} />
          <Route path="/learn/sha256/section3" component={Section3} />
          <Route path="/learn/sha256/section4" component={Section4} />
          <Route path="/learn/sha256/section5" component={Section5} />
          <Route path="/learn/sha256/section6" component={Section6} />
          <Route path="/learn/sha256/section7" component={Section7} />

          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
