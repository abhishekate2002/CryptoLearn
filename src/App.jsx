import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
function App() {
  return (
    <Router>
      <Route path="/" exact>
        <MainNavigation />
      </Route>
    </Router>
  );
}

export default App;
