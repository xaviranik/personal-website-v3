import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Intro from "./components/intro/Intro";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <div className="sections">
        <Intro />
      </div>
    </div>
  );
}

export default App;
