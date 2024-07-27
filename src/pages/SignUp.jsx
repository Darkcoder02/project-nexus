import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setUserData({ ...userData, [input.name]: input.value });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="bg-white bg-opacity-40 rounded-xl lg:w-6/12">
        <div className="flex flex-col">
          <div className="w-full text-4xl bg-white py-8">
            <FaCircleUser className="w-full text-center"/>
          </div>
          
          <div className="p-4">
            <h1 className="text-4xl my-4 text-white text-center">Register</h1>
            <form className="flex flex-col">
              <Input
                type={"text"}
                placeholder={"Name *"}
                name={"name"}
                id={"name"}
                value={userData.name}
                handleChange={handleChange}
              />
              <Input
                type={"email"}
                placeholder={"Email *"}
                name={"email"}
                id={"email"}
                value={userData.email}
                handleChange={handleChange}
              />
              <Input
                type={"phone"}
                placeholder={"Phone Number *"}
                name={"phone"}
                id={"phone"}
                value={userData.phone}
                handleChange={handleChange}
              />
              <Input
                type={"password"}
                placeholder={"Password *"}
                name={"password"}
                id={"password"}
                value={userData.password}
                handleChange={handleChange}
              />
              <div className="flex items-center gap-10 my-4 text-white justify-between">
                <p className="text-sm">
                  Already have an account?
                  <NavLink to="/login" className="underline">
                    Login
                  </NavLink>
                </p>
                <Button type={"submit"} placeholder={"Register"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
