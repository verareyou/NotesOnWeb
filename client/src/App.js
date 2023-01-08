// import e from 'cors';
import { useState } from "react";
import { useRef } from "react";
import React from "react";
import Navbar from "./scenes/Navbar.jsx";
import Main from "./scenes/Main.jsx";

function App() {
  return (
    <div className=" text-white app bg-[#252526]">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
