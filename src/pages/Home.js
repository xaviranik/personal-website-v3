import { React, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Work from "../components/Work";
import Portfolio from "../components/Portfolio";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
      <Intro />
      <div id="about">
        <About />
        <Work />
      </div>
      <Portfolio />
    </>
  );
};

export default Home;
