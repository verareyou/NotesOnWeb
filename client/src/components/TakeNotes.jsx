import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTE } from "../mutations/noteMutations.js";
import { GET_NOTES } from "../queries/noteQueries.js";
import { motion } from "framer-motion";

function TakeNotes() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("Anonymous");
  const [content, setContent] = useState("");
  const [notewidth, setNotewidth] = useState("h-[28px]");

  const [addNote] = useMutation(ADD_NOTE, {
    variables: {
      title,
      writer,
      content,
    },
    refetchQueries: [{ query: GET_NOTES }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addNote(title, writer, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className=" absolute left-[-100px] pl-[35%] bg-[#fefff378] backdrop-blur-[3px] h-[28px] items-center justify-center flex shadow-lg ">
        <form
          onSubmit={onSubmit}
          className=" flex flex-row justify-center items-center  "
        >
          <div className="writer relative group">
            <input
              type="writer"
              placeholder="writer"
              value={writer}
              onChange={(e) => setTitle(e.target.value)}
              className=" bg-transparent text-black h-[28px] placeholder:text-[black] focus:outline-none border-x border-[#a3a3a3] px-2 "
            />
              <span className="absolute -bottom-0 right-0 w-0 h-2 bg-blue-400 group-hover:w-full group-hover:transition-all"></span>

          </div>
          <div className="title">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent h-[28px] placeholder:text-[black] text-black focus:outline-none border-x border-[#a3a3a3] px-2  "
            />
          </div>
          <span className={`note h-[28px] flex justify-center `}>
            <textarea
              onInput={(e) => {
                e.target.style.height = 28 + "px";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              id="content"
              maxLength={400}
              cols={30}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Take a note..."
              className={`bg-[#fefff392] placeholder:text-[black] backdrop-blur-lg focus:ring-0 h-[28px] text-left text-black focus:outline-none border-x border-[#a3a3a3] px-2 resize-none   `}
            ></textarea>
          </span>

          <div className="">
            <button
              accessKey="enter"
              onkeypress="return event.keyCode != 13;"
              className=" px-2 text-[#80907f] font-light duration-100 ease-in-out hover:text-[#000000] hover:px-4 "
            >
              save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TakeNotes;
