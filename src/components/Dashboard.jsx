import Notes from "./Notes";
import SearchCont from "./SearchCont";
import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./Header";
import Sider from "antd/lib/layout/Sider";
import Layout, { Content } from "antd/lib/layout/layout";
import Account from "./Account";

function Dashboard() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Sample Text",
      date: "03/07/2021",
    },
    {
      id: nanoid(),
      text: "Workout",
      date: "03/07/2021",
    },
    {
      id: nanoid(),
      text: "Node JS Course",
      date: "03/07/2021",
    },
  ]);
  const [searchText, setSearchText] = useState("");

  // const handleSearchClick = (text) => {
  //   let notesClone = [...notes];
  //   setSearchText(text);
  //   // const searchedNote =
  //   // notes.filter((note) => note.text.toLowerCase().includes(text));
  //   setNotes(notes.filter((note) => note.text.toLowerCase().includes(text)));
  //   // setNotes(notesClone);
  // };

  const addNote = (text) => {
    let newNotes = [...notes];
    let date = new Date();
    newNotes.unshift({
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    });
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // const searchNote = (searchText) => {
  //   const searchedNote = notes.filter((note) => {
  //     note.text.toLowerCase().includes(searchText);
  //   });
  //   setNotes(searchedNote);
  // };

  return (
    <Layout>
      <Sider>
        <Account />
      </Sider>
      <Content>
        <div className="container">
          <Header />
          <SearchCont onSearchClick={setSearchText} />
          <Notes
            // notes={notes}
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </Content>
    </Layout>
  );
}

export default Dashboard;
