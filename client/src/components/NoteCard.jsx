import React from "react";
import { DELETE_NOTE } from "../mutations/noteMutations.js";
import { useMutation } from "@apollo/client";
import { GET_NOTES } from "../queries/noteQueries.js";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function NoteCard({ note }) {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: note.id,
    },
    refetchQueries: [{ query: GET_NOTES }],
  });
  const handleDelete = () => {
    deleteNote();
  };

  const variants = {
    initial: {
      x: 0,
      y: -10,
    },
    middle: {
      x: 0,
      y: 0,
    },
    exit: {
        x: 0,
        y: 10,
    }
  };

  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="middle"
        className=" m-2 p-2 py-2 max-w-[250px] text-white max-h-60 backdrop-blur-[2px] flex flex-wrap shadow-xl bg-[#ffffff2b]
        "
      >
        <h1 className=" text-lg font-bold ">{note.title}</h1>
        <p className=" w-full break-words py-2 ">{note.content}</p>
        <p className="text-[12px] font-light ">{note.writer}</p>

        <motion.button
            variants={variants}
            initial="initial"
            animate="middle"    
            exit="exit"
          className=" text-[12px] pl-2 text-[#ffffff] font-black "
          onClick={handleDelete}
        >
          Delete
        </motion.button>
      </motion.div>
    </>
  );
}
