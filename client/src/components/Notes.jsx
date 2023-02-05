import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../queries/noteQueries.js";
import NoteCard from "./NoteCard.jsx";
// import { useState, useEffect } from "react";
import {motion} from "framer-motion";



function Notes() {
  
    const { loading, error, data } = useQuery(GET_NOTES);
    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-white">Error :(</p>;
    // console.log(data.notes);
  return (
    <>
      <div 
      // animate={{ x: -mouseCursor.x * 0.01, y: -mouseCursor.y * 0.01 }}
      className=" h-full w-full flex max-lg:scale-90 flex-wrap max-lg:mt-4 max-lg:scrollbar-none items-center justify-center translate-y-[-5%] scrollbar-thin scrollbar-thumb-[white] scrollbar-track-[#00000000] scrollbar-thumb-rounded-full scrollbar-track-rounded-full ">
        {data.notes.map((note) => (
            <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}

export default Notes;
