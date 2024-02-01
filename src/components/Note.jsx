import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";

const StyledDeleteButton = styled(Button)({
  minWidth: 40,
  height: 40,
  position: "absolute",
  right: 10,
  bottom: 10,
  borderRadius: "50%",
  color: "red",
  backgroundColor: "white",
  display: "flex", // Added for flexbox
  alignItems: "center", // Centers content vertically
  justifyContent: "center", // Centers content horizontally
  "&:hover": {
    backgroundColor: "red",
    color: "white",
  },
  '& .MuiButton-startIcon': {
    // Your style overrides here
    marginRight: '0px',
    marginLeft: '0px',
  }
});

function Note(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="note-footer">
        <StyledDeleteButton onClick={handleDelete} startIcon={<DeleteIcon />}/>
      </div>
    </div>
  );
}

export default Note;
