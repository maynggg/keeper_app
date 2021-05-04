import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { getAllNotes, createNote, deleteNote, editNote } from '../apiService';

function HomePage({ onLogout }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const notes = await getAllNotes();
        setItems(notes);
      } catch (error) {
        toast.error(error.response.data.error);
      }
    }
    fetchData();
  }, []);

  const handleNewItem = async (item) => {
    try {
      const newNote = await createNote(item);
      setItems([...items, newNote]);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  
  const  handleEditNote = async (id, editedItem) => {
    try {
      const editedNote = await editNote(id, editedItem);
      console.log(editedNote);
      setItems(items.map((item) => {
        if (item._id === id) return editedNote;
        return item;
      }));
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <div>
      <Header onLogout={onLogout}/>
      <CreateArea
        onItemCreated={handleNewItem}
      />
      {items.map((item) => (
        <Note 
          key={item._id}
          id={item._id}
          title={item.title}
          content={item.content}
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default HomePage;
