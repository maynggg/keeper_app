import React, { useState, useEffect } from "react";

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { getAllNotes, createNote, deleteNote } from '../apiService';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const notes = await getAllNotes();
      setItems(notes);
    }
    fetchData();
  }, []);

  const handleNewItem = async (item) => {
    const newNote = await createNote(item);
    setItems([...items, newNote]);
  }

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    setItems(items.filter((item) => item._id !== id));
  }

  return (
    <div>
      <Header />
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
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
