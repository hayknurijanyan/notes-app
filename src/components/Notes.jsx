import Note from "./Note";
import AddNote from "./AddNote";

const Notes = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <div>
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        </div>
      ))}
    </div>
  );
};

export default Notes;
