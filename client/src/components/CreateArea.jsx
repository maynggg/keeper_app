import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import {  Fab, Zoom } from '@material-ui/core';


const DEFAULT_NEW_NOTE = {
  title: '',
  content: '',
};

function CreateArea({ onItemCreated }) {
  const [newNote, setNewNote] = useState({...DEFAULT_NEW_NOTE})

  const { title, content } = newNote;

  const [zoomIn, setZoomIn] = useState(false);
  
  function handleChange(e) {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onItemCreated(newNote);
    setNewNote({...DEFAULT_NEW_NOTE});
  }

  function handleClick() {
    setZoomIn(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {zoomIn && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={title}
        />}
          
          <textarea
            onClick={handleClick}
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows= {zoomIn ? 3 : 1}
            value={content}
          />
          
          <Zoom in={zoomIn}>
            <Fab type="submit">
              < AddIcon/>
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
