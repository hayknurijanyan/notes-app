import Note from "./Note";
import AddNote from "./AddNote";

const Notes = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default Notes;
