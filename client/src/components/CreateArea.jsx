import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Zoom } from '@material-ui/core';
import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  width: 480px;
  margin: 30px auto 20px auto;
  background: #fff;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 0 1px 5px rgb(138, 137, 137);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 4px;
  outline: none;
  font-size: 1.2em;
  font-family: inherit;
  resize: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  padding: 4px;
  outline: none;
  font-size: 1.2em;
  font-family: inherit;
  resize: none;
`;

const Button = styled.button`
  position: absolute;
  right: 18px;
  bottom: -18px;
  background: #f5ba13;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;
`;

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
      <Form onSubmit={handleSubmit}>
        {zoomIn && <Input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={title}
        />}
          
          <TextArea
            onClick={handleClick}
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows= {zoomIn ? 3 : 1}
            value={content}
          />
          
          <Zoom in={zoomIn}>
            <Button type="submit">
              < AddIcon/>
            </Button>
          </Zoom>
      </Form>
    </div>
  );
}

export default CreateArea;
