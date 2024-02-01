import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import initialNotes from "../notes";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    const nextKey = notes.length > 0 ? Math.max(...notes.map(note => note.key)) + 1 : 1;
    const noteWithKey = { ...newNote, key: nextKey };
    setNotes(prevNotes => [...prevNotes, noteWithKey]);
  }

  function deleteNote(noteKey) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.key !== noteKey);
    });
  }

  return (
    <>
      <Header />
      <CreateNote onAdd={addNote}/>
      <div className="note-container">
        {notes.map((note) => (
          <Note key={note.key} id={note.key} title={note.title} content={note.content} onDelete={deleteNote}/>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
