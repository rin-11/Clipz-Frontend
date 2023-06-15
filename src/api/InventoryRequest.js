import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });


export const getUserInventory= (userId)=> API.get(`/inventory/${userId}`,{userId: userId});
export const getInventoryItem= (id, userId)=> API.get(`/inventory/${id}`);
export const deleteInventoryItem= (id, userId)=> API.delete(`/inventory/${id}`);
