import React, { useEffect } from "react";
import Notes from "../components/Notes.jsx";
import TakeNotes from "../components/TakeNotes.jsx";
import { useState } from "react";

function Main() {
  const [screenwidth, setScreenwidth] = useState(0);
  useEffect(() => {
    setScreenwidth(window.innerWidth);
  }, [
    window.addEventListener("resize", () => {
      setScreenwidth(window.innerWidth);
    }),
  ]);
  return (
    <div className="main h-full w-full overflow-hidden bg-[#151515] flex flex-col justify-center items-center ">
      <div className="takenote lg:top-0 top-0 lg:h-[20%] overflow-hidden max-lg:mt-[2%] max-lg:max-h-[80%] scrollbar-none max-lg:translate-y-[-10%] w-full z-10 max-lg:z-0  ">
        {screenwidth > 1024 ? <TakeNotes /> : <Notes />}
      </div>
      {/* <hr className="border-t-[#858585] w-full mt-2 mb-4"/> */}
      <div className="notes h-36 max-lg:absolute max-lg:bottom-0 lg:h-[80%] w-full flex justify-center items-center z-0 ">
      {screenwidth > 1024 ? <Notes /> : <TakeNotes />}
        
      </div>
    </div>
  );
}

export default Main;
