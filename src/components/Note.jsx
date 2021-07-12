import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import NotePopOver from "./NotePopOver";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const [editedText, setEditedText] = useState(text);

  const textChange = (newtext) => {
    setEditedText(newtext);
  };

  const cancelText = () => {
    setEditedText(text);
  };

  return (
    <div className="note">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{editedText}</span>
        <NotePopOver
          text={text}
          date={date}
          // handleEditedText={setEditedText(newtext)}
          handleEditedText={(newtext) => console.log(newtext)}
          // handleOK={textChange}
          // handleCancel={cancelText}
        />
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
