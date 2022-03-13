import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "./../../actions/user";
import Modal from "./../../component/Modal/modal";

const Register = () => {
  const dispatch = useDispatch();
  const [isopen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    if (user.error === "email has been used before") {
      alert("Error: email has been used before");
      resetForm();
    }

    if (user.error === "all fields are required") {
      alert("Error: all fields are required");
      resetForm();
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      navigate("/dashboard");
    }
  }, [user, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = formData;
    if (name === "" || email === "" || password === "") {
      alert("all fields are required");
    } else {
      dispatch(userAction.registerUser(formData));
      setIsOpen(true);
      dispatch(userAction.resetUser());
      navigate("/login");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  const closeModal = () => {
    setIsOpen(!isopen);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="register">
      <div className="register__form">
        <form onSubmit={handleSubmit}>
          <h2>Register an account now!</h2>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={onChange}
          />
          <input type="submit" value="Register now" />
          <Link to="/login">
            Have an account, <b>Login now</b>
          </Link>
        </form>
      </div>
      <div className="register__about"></div>{" "}
      {isopen && (
        <Modal
          message={"Account has been registered successfully ..."}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Register;
