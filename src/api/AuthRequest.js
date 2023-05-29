import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:4000'})

export const loginUser= (formData)=> API.post('/auth/login', formData)
export const registerUser = (formData)=> API.post('/auth/register', formData)