import { BrowserRouter as Router } from "react-router-dom";
import "./app.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
