import React from "react";
import Notes from "../components/Notes.jsx";
import TakeNotes from "../components/TakeNotes.jsx";

function Main() {
  return (
    <div className="">
      <div className="main ">
        {/* <hr className="border-t-[#858585] w-full mt-2 mb-4"/> */}
        {/* <Notes /> */}
        <TakeNotes />
      </div>
    </div>
  );
}

export default Main;
