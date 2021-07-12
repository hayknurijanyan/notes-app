import { DeleteOutlined } from "@ant-design/icons";
import NotePopOver from "./NotePopOver";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{text}</span>
        <NotePopOver text={text} date={date} />
      </div>
      <div className="note-footer">
        <small>{date}</small>

        <DeleteOutlined
          className="delete-icon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
