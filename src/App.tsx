import "./App.css";
import AppBar from "./components/appbar/AppBar";

import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Skills from "./views/Skills";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <AppBar></AppBar>

      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </div>
  );
}

export default App;
