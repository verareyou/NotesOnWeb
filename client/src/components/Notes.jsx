import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../queries/noteQueries.js";
import NoteCard from "./NoteCard.jsx";
import { DELETE_NOTE } from "../mutations/noteMutations.js";



function Notes() {

    const { loading, error, data } = useQuery(GET_NOTES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    // console.log(data.notes);
  return (
    <>
      <div className="savednotes grid gap-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:w-[1000px] md:w-[752px] h-full ">
        {data.notes.map((note) => (
            <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}

export default Notes;
