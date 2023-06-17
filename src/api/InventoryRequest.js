import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const getUserInventory = (userId) => API.get(`/inventory/user/${userId}`);

export const getInventoryItem = (id) =>
  API.get(`/inventory/item/${id}`)
    .then(response => response.data);

export const updateInventory = (id, updatedData) =>
  API.put(`/inventory/${id}`, updatedData);

export const deleteInventoryItem = (id) => API.delete(`/inventory/${id}`);

