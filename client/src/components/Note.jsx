import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';

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

function Note(props) {
  return (
    <NoteItem>
      <Title>{props.title}</Title>
      <Content>{props.content}</Content>
      <Button onClick={() => {props.onDelete(props.id)}}>
        <DeleteIcon />
      </Button>
    </NoteItem>
  );
}

export default Note;
