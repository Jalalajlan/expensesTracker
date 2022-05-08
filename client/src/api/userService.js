import axios from "axios";

const URL = "https://jalal-expenses-app.herokuapp.com/user";

export const register = (user) => axios.post(`${URL}/register`, user);
export const login = (user) => axios.post(`${URL}/login`, user);
