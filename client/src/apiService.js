import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const getAllNotes = async () => {
  const { data } = await axios.get(`${BASE_URL}/notes`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  });
  return data;
}

const createNote = async (item) => {
  const { data } = await axios.post(`${BASE_URL}/notes`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  });
  return data;
}

const deleteNote = async (id) => {
  const { data } = await axios.delete(`${BASE_URL}/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`
    }
  });
  return data;
}

const login = async (formData) => {
  const { email, password } = formData;

  const { data } = await axios.post(`${BASE_URL}/users/login/`, {
    email: email,
    password: password,
  });
  return data;
}

const signup = async (formData) => {
  const { email, firstName, lastName, password } = formData;

  const { data } = await axios.post(`${BASE_URL}/users/signup/`, {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  });
  return data;
}

export {
  getAllNotes,
  createNote,
  deleteNote,
  login,
  signup,
}