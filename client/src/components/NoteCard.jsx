import React from 'react'
import { DELETE_NOTE } from "../mutations/noteMutations.js";
import { useMutation } from "@apollo/client";
import { GET_NOTES } from "../queries/noteQueries.js";

export default function NoteCard({ note }){
    const [deleteNote] = useMutation(DELETE_NOTE, {
        variables: {
            id: note.id
        },
        refetchQueries: [{ query: GET_NOTES }]
    })
    const handleDelete = () => {
        deleteNote();
    }

    return (
        <>
            <div className="card max-h-[300px] flex flex-col justify-between w-[238px] h-60 rounded-3xl bg-[#ffffff1e]">
                <div>
                <h1 className="title text-lg font-bold p-4">
                    {note.title}
                </h1>
                <p className="note min-h-[30px] w-[238px] p-4">
                    {note.content}
                </p>
                </div>
                
                <button className="delete w-24 self-center mb-4 bg-[#ff3232] text-white p-2 rounded-full ease-in-out duration-200 hover:bg-[#d00a0a]" onClick={handleDelete}>
                    Delete
                </button>
            </div>
            
        </>
    )
}