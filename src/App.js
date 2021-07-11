import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
