import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const getAllNotes = async () => {
  const { data } = await axios.get(`${BASE_URL}/notes`);
  return data;
}

const createNote = async (item) => {
  const { data } = await axios.post(`${BASE_URL}/notes`, item);
  return data;
}

const deleteNote = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}/notes/${id}`);
  return data;
}

export {
  getAllNotes,
  createNote,
  deleteNote,
}