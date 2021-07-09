import { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Editable, Slate, withReact } from "slate-react";

const AddNote = ({ handleAddNote }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);

  const handleAddClick = () => {
    let newText = value[0].children[0].text;
    if (value[0].children[0].text.length > 0) {
      handleAddNote(newText);
    }
    setValue([
      {
        type: "paragraph",
        children: [{ text: "" }],
      },
    ]);
  };

  return (
    <div className="note new">
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable autoFocus placeholder="Type here to add a note" />
      </Slate>
      <div className="note-footer">
        <small>{value[0].children[0].text.length} characters</small>
        <button className="add-button" onClick={handleAddClick}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default AddNote;
