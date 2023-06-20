import axios from "axios";

// server baseURL
const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// server auth request routes
export const loginUser = (formData) => API.post('/auth/login', formData);
export const registerUser = (formData) => API.post('/auth/register', formData);