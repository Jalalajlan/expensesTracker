import axios from "axios";

const URL = "http://localhost:5000/user";

const fetchUser = () => axios.get(URL);
const createUser = (user) => axios.post(`${URL}/register`, user);
const loginUser = (user) => axios.post(`${URL}/login`, user);

const userService = {
  fetchUser,
  createUser,
  loginUser,
};

export default userService;
