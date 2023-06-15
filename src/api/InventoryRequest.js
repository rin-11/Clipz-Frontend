import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });


export const getUserInventory = (userId) => API.get(`/inventory/user/${userId}`);

export const getInventoryItem = (id) => API.get(`/inventory/item/${id}`, { responseType: 'blob' })
  .then(response => {
    const blob = new Blob([response.data], { type: response.headers['content-type'] });
    return blob;
  });

export const deleteInventoryItem= (id) => API.delete(`/inventory/${id}`);
