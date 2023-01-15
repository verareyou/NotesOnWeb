import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_NOTE } from "../mutations/noteMutations.js";
import { GET_NOTES } from "../queries/noteQueries.js";



function TakeNotes() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [addNote] = useMutation(ADD_NOTE, {
        variables: {
            title,
            content
        },
        refetchQueries: [{ query: GET_NOTES }]
    })

    const onSubmit = (e) => {
        e.preventDefault();
        addNote(title, content);
        setTitle("");
        setContent("");
    }

  return (
    <div className="flex mt-4 ml-8 flex-col w-[50%] h-48 rounded-lg mb-5 bg-[#ffffff49]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full h-full bg-transparent "
      >
        <div className="title">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 placeholder:text-[#ffffff] bg-transparent "
          />
        </div>
        <div className="note">
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Take a note..."
            className="w-full p-2 placeholder:text-[#ffffff] bg-transparent"
          ></textarea>
        </div>

        <div className="buttons flex justify-end">
          <button
            type="submit"
            className="save bg-[#bcbcbc] translate-x-5 translate-y-5 text-black py-3 m-2 px-2 rounded-full ease-in-out duration-200 hover:bg-[#ffffff] "
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TakeNotes;
