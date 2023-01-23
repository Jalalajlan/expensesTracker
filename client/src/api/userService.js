import axios from "axios";

const URL = "http://localhost:5000/user";

export const register = (user) => axios.post(`${URL}/register`, user);
export const login = (user) => axios.post(`${URL}/login`, user);
