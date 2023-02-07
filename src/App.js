import React from "react";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Expresssingle from "./components/Expresssingle";
import Printing from "./components/Printing";
import Enveloping from "./components/Enveloping";
import Massmailing from "./components/Massmailing";
import Field from "./components/Field";
import InterBranch from "./components/InterBranch";
import Electronic from "./components/Electronic";
import Collection from "./components/Collection";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="" element={<Home/>} />
          <Route path="index.html" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Express" element={<Expresssingle />} />
          <Route path="/printing" element={<Printing />} />
          <Route path="/Enveloping" element={<Enveloping />} />
          <Route path="/Mailing" element={<Massmailing />} />
          <Route path="/Field" element={<Field />} />
          <Route path="/InterBranch" element={<InterBranch />} />
          <Route path="/Electronic" element={<Electronic />} />
          <Route path="/cash" element={<Collection />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}
export default App;