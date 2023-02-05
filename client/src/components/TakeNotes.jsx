import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTE } from "../mutations/noteMutations.js";
import { GET_NOTES } from "../queries/noteQueries.js";
import { motion } from "framer-motion";

function TakeNotes() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("Anonymous");
  const [content, setContent] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

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
    // setWriter("Ano");
    setContent("");
  };

  return (
    <div className="h-full w-full flex justify-center items-center ">
      <div className=" absolute lg:left-[-100px] lg:pl-[35%] max-lg:w-full max-lg:bg-[#ffffff] bg-[#fefff378] backdrop-blur-[3px] lg:h-[28px] items-center justify-center flex shadow-lg ">
        <form
          onSubmit={onSubmit}
          className=" flex flex-col h-36 max-lg:w-full lg:flex-row justify-between items-center  "
        >
          <div className="writer max-lg:w-full">
            <input
              type="text"
              placeholder="writer"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
              className=" bg-transparent max-lg:w-full text-black h-[28px] placeholder:text-[black] focus:outline-none border-x border-[#a3a3a3] px-2 "
            />
          </div>
          <div className="title max-lg:w-full">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-transparent h-[28px] max-lg:w-full placeholder:text-[black] text-black focus:outline-none border-x border-[#a3a3a3] px-2  "
            />
          </div>
          <span className={`note lg:h-[28px]  max-lg:w-full flex justify-center `}
          
          >
            <textarea
             
              id="content"
              maxLength={400}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              cols={30}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Take a note..."
              className={` bg-[#fefff392] max-lg:w-full placeholder:text-[black] backdrop-blur-[2px] focus:ring-0 h-[28px] text-left text-black focus:outline-none border-x border-[#a3a3a3] px-2 resize-none   `}
            ></textarea>
          </span>

          <div className="">
            <button
              accessKey="enter"
              type="submit"
              // onkeypress="return event.keyCode != 13;"
              className=" px-2 text-[#393939] font-regular duration-100 ease-in-out hover:text-[#000000] hover:px-4 "
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
