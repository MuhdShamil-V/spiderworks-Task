import "./App.css";
import Group from "./Components/Group";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar/Navbar";
// import StickyNavbar from "./Components/Navbar/StickyNavbar";

function App() {
  return (
    <div className="App">
     <Navbar />
     {/* <StickyNavbar /> */}
     <Home />
     <Group />
    </div>
  );
}

export default App;
