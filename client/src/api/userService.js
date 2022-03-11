import axios from "axios";

const URL = "http://localhost:5000/user";

const fetchUser = () => axios.get(URL);
const createUser = (user) => axios.post(`${URL}/register`, user);

const userService = {
  fetchUser,
  createUser,
};

export default userService;
