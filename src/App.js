import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/commons/Header/Header";
// importing pages layouts
import Home from "./components/Layouts/Home";
import About from "./components/Layouts/About";
import Work from "./components/Layouts/Work";
import NotFound from "./components/Layouts/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
