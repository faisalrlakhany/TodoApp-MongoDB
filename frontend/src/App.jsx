
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup/Signup.jsx";
import Signin from "./components/signup/Signin.jsx";
import Todo from "./components/todo/Todo.jsx";
import { useDispatch } from "react-redux";
import { authActions } from "./store/index.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("userId");
    if (id) {
      dispatch(authActions.login());
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
