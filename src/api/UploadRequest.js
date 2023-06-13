import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const uploadImage = (data) => API.post("/upload", data);
export const uploadInventory = (data) => API.post("/inventory", data);