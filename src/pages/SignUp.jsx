import React, { useState } from "react";
import Input from "../components/ui/Input";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import axios from "axios";

function SignUp() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setUserData({ ...userData, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, userData);
      navigate("/login");
      console.log(res.message);
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
      <div className="bg-white bg-opacity-40 rounded-xl lg:w-6/12">
        <div className="flex flex-col">
          <div className="w-full text-4xl bg-white py-8">
            <FaCircleUser className="w-full text-center" />
          </div>

          <div className="p-4">
            <h1 className="text-4xl my-4 text-white text-center">Register</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <Input
                type={"text"}
                placeholder={"First Name *"}
                name={"firstName"}
                id={"firstName"}
                value={userData.firstName}
                handleChange={handleChange}
              />
              <Input
                type={"text"}
                placeholder={"Last Name *"}
                name={"lastName"}
                id={"lastName"}
                value={userData.lastName}
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
                type={"password"}
                placeholder={"Password *"}
                name={"password"}
                id={"password"}
                value={userData.password}
                handleChange={handleChange}
              />
              {error && <div className={'p-2 bg-red-400 text-white rounded-xl'}>{error}</div>}
              <div className="flex items-center gap-10 my-4 text-white justify-between">
                <p className="text-sm">
                  Already have an account?
                  <NavLink to="/login" className="underline">
                    Login
                  </NavLink>
                </p>
                <button
                  type="submit"
                  className="bg-orange-400 p-2 rounded-xl text-white"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
