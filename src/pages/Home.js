import { React, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
      <Navbar toggle={toggleSidebar} />
    </>
  );
};

export default Home;
