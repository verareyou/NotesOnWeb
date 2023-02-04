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
    <div className="">
      <form
        onSubmit={onSubmit}
        className=""
      >
        <div className="title">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=""
          />
        </div>
        <div className="note">
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Take a note..."
            className=""
          ></textarea>
        </div>

        <div className="">
          <button
            type="submit"
            className=""
          >
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TakeNotes;
