import React from "react";
import Notes from "../components/Notes.jsx";
import TakeNotes from "../components/TakeNotes.jsx";

function Main() {
  return (
    <div className="flex flex-col h-[calc(100%-64px)]">
      <div className="main w-full flex flex-col justify-center items-center">
        <TakeNotes />
        {/* <hr className="border-t-[#858585] w-full mt-2 mb-4"/> */}
        <Notes />
      </div>
    </div>
  );
}

export default Main;
