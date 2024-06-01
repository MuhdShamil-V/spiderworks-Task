import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import StickyNavbar from "./Components/Navbar/StickyNavbar";
import Home from "./Components/Home";
import Group from "./Components/Group";
import Topics from "./Components/Topics";
import Discussion from "./Components/Discussion";


function App() {
  return (
    <div>
      <Navbar />
      <StickyNavbar />
      <Home />
      <Group />
      <Topics />
      <Discussion />
    </div>
  );
}

export default App;
