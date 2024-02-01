import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateNote(props) {
    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="create-note-container">
      <div className="note-card">
        <form>
          {isExpanded ? <input
            className="note-input"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          /> : null}
          <textarea
            className="note-textarea"
            onClick={expand}
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
          />
          <Zoom in={isExpanded}>
            <button className="note-submit" onClick={submitNote}>
              <AddIcon />
            </button>
          </Zoom>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
