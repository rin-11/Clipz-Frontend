import axios from "axios";

// server baseURL
const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

// server upload routes
export const uploadImage = (data) => API.post("/upload", data);
export const uploadInventory = (data) => API.post("/inventory", data);