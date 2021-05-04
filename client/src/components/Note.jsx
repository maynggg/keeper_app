import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import styled from 'styled-components';
import { editNote } from '../apiService';

const NoteItem = styled.div`
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
  float: left;
`;

const Title = styled.h1`
  font-size: 1.1em;
  margin-bottom: 6px;
`;

const Content = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Button = styled.button`
  position: relative;
  float: right;
  margin-right: 10px;
  color: #f5ba13;
  border: none;
  width: 36px;
  height: 36px;
  cursor: pointer;
  outline: none;
  background-color: white;
`;

const Input = styled.input`
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;

  :focus {
    outline: none;
  }
`;

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: props.title,
    content: props.content,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const editNote = () => {
    if (formData.title === props.title && formData.content === props.content) {
      setIsEditing(false);
      return;
    }
    props.onEdit(props.id, formData);
  }

  useEffect(() => {
    setIsEditing(false);
  }, [props.title, props.content]);

  return (
    <NoteItem>
      {isEditing ? (
        <>
          <Input
            onChange={handleInputChange}
            value={formData.title}
            name="title"
          />
          <Input
            onChange={handleInputChange}
            value={formData.content}
            name="content"
          />
        </>
      ) : (
        <>
          <Title>{props.title}</Title>
          <Content>{props.content}</Content>
        </>
      )}
      {isEditing && (
        <Button onClick={editNote}>Save</Button>
      )}
      <Button onClick={() => props.onDelete(props.id)}>
        <DeleteIcon />
      </Button>
      <Button onClick={() => setIsEditing(true)}>
        <EditIcon />
      </Button>
    </NoteItem>
  );
}

export default Note;
