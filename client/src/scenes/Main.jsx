import React from "react";

function Main() {
  return (
    <div className="flex flex-row h-[calc(100%-64px)]">
      <div
        className="sidebar absolute left-0 top-16 w-12 md:w-24 h-[calc(100%-64px)] border-r border-[#858585] 
      hover:w-96 ease-in-out duration-500 "
      >
        <ul className="w-full h-9/12 flex flex-col justify-start items-center">
          <li className="w-full py-3 text-center hover:bg-amber-300 rounded-r-full ease-in-out duration-300 ">
            N
          </li>
          <li className="w-full py-3 text-center hover:bg-amber-300 rounded-r-full ease-in-out duration-300 ">
            R
          </li>
          <li className="w-full py-3 text-center hover:bg-amber-300 rounded-r-full ease-in-out duration-300 ">
            E
          </li>
          <li className="w-full py-3 text-center hover:bg-amber-300 rounded-r-full ease-in-out duration-300 ">
            A
          </li>
          <li className="w-full py-3 text-center hover:bg-amber-300 rounded-r-full ease-in-out duration-300 ">
            T
          </li>
        </ul>
      </div>
      <div className="main w-full flex flex-col justify-center items-center">
        <div className="note-element  mt-8 mb-4 w-7/12 sm:w-6/12 md:w-6/12 lg:w-6/12">
          <form action="" className="h-12 w-full">
            <input
              type="text"
              className="h-full w-full rounded-lg bg-transparent placeholder:text-[#cccccc] border-[#858585] border"
              placeholder="  Take a note..."
            />
            <button type="submit"></button>
          </form>
        </div>
        <div className="savednotes lg:w-[1000px] md:w-[752px] h-full">
            <div className="card max-h-[300px] w-[238px] h-60 rounded-lg border">
              <p className="note min-h-[30px] w-[238px] p-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                vitae velit error laudantium saepe. Eligendi tempore eaque quas
                temporibus quasi?
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
