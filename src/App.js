import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";
import Resume from "./pages/Resume";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
