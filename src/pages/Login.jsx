import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import Input from "../components/ui/Input";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setLoginData({ ...loginData, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, loginData);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="flex flex-col lg:w-6/12">
        <div className="w-full text-4xl bg-white py-4">
          <FaLock className="w-full text-center" />
        </div>
        <div className="p-4 bg-white bg-opacity-40 rounded-b-xl">
          <h1 className="text-4xl my-4 text-white text-center">Login</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <Input
              type={"email"}
              placeholder={"Email *"}
              name={"email"}
              id={"email"}
              value={loginData.email}
              handleChange={handleChange}
            />

            <Input
              type={"password"}
              placeholder={"Password *"}
              name={"password"}
              id={"password"}
              value={loginData.password}
              handleChange={handleChange}
            />
            {error && (
              <div className={"p-2 bg-red-400 text-white rounded-xl"}>
                {error}
              </div>
            )}
            <div className="flex items-center gap-10 my-4 text-white justify-between">
              <p className="text-sm">
                New Here?{" "}
                <NavLink to="/signup" className={`underline`}>
                  Sign Up
                </NavLink>
              </p>

              <button
                type="submit"
                className="bg-orange-400 p-2 rounded-xl text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
