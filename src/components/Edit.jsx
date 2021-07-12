// import React, { useEffect, useMemo, useState } from "react";
// import { createEditor, Editor } from "slate";
// import { withReact, Editable, Slate } from "slate-react";
// // import { Editable } from "slate-react/dist/components/editable";

// const Edit = ({ text, handleEditedText }) => {
//   const editor = useMemo(() => withReact(createEditor()), []);
//   // Add the initial value when setting up our state.

//   const [value, setValue] = useState([
//     {
//       type: "paragraph",
//       children: [{ text: text }],
//     },
//   ]);
//   const onCancel = () => {
//     setValue([
//       {
//         type: "paragraph",
//         children: [{ text: text }],
//       },
//     ]);
//   };

//   const onTextChange = (newValue) => {
//     handleEditedText(newValue[0].children[0].text);
//     setValue(newValue);
//   };

//   return (
//     <Slate editor={editor} value={value} onChange={onTextChange}>
//       <Editable />
//     </Slate>
//   );
// };

// export default Edit;
