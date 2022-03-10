import axios from "axios";

const URL = "http://localhost:5000/";

const fetchUser = () => axios.get(URL);
const createUser = (user) => axios.post(URL, user);

const userService = {
  fetchUser,
  createUser,
};

export default userService;
