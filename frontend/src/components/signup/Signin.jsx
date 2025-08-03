import React from "react";
import "./Signup.css";
import HeadingComp from "./HeadingComp.jsx";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/todo/login", inputs).then((res) => {
      const responseMsg = res.data.data._id;
      console.log(responseMsg);

      history("/todo");
    });
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column  d-flex justify-content-center align-items-center">
            <HeadingComp first={"Sign"} second={"In"} />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={inputs.email}
                onChange={change}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={inputs.password}
                onChange={change}
              />
              <button className="btn-signup p-2" onClick={submit}>
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
