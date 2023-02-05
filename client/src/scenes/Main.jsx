import React, { useEffect } from "react";
import Notes from "../components/Notes.jsx";
import TakeNotes from "../components/TakeNotes.jsx";
import { useState } from "react";

function Main() {
  return (
    
    <div className="main h-full w-full bg-[#1e1f1d] flex flex-col justify-center items-center ">
      <div className="takenote h-[20%] w-full z-10 ">
        <TakeNotes />
      </div>
      {/* <hr className="border-t-[#858585] w-full mt-2 mb-4"/> */}
      <div className="notes h-[80%] w-full flex justify-center items-center z-0 ">
        <Notes />
      </div>
    </div>
  );
}

export default Main;
