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
function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Body></Body>
          </Route>
          <Route to="/history">
            <History />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
