import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setLoginData({ ...loginData, [input.name]: input.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="flex flex-col lg:w-6/12">
        <div className="w-full text-4xl bg-white py-4">
          <FaLock className="w-full text-center" />
        </div>
        <div className="p-4 bg-white bg-opacity-40 rounded-b-xl">
          <h1 className="text-4xl my-4 text-white text-center">Login</h1>
          <form className="flex flex-col">
            <Input
              type={"text"}
              placeholder={"Name *"}
              name={"name"}
              id={"name"}
              value={loginData.name}
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

            <div className="flex items-center gap-10 my-4 text-white justify-between">
              <p className="text-sm">
                New Here?{" "}
                <NavLink to="\signup" className={`underline`}>
                  Sign Up
                </NavLink>
              </p>
              <Button type={"submit"} placeholder={"Login"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
