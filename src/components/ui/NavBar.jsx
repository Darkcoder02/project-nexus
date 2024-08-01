import React, { useState } from "react";
import { MdFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "./Button";
import { IoMdCloseCircle } from "react-icons/io";
import { MdRestaurantMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const handleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full shadow-xl bg-white">
      <div>
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center justify-center bg-black text-white p-2 rounded-md cursor-pointer">
            <MdFastfood className="text-xl" />
            <h1 className="text-xl font-semibold">Food Hub</h1>
          </div>
          <nav className="hidden md:flex items-center text-lg gap-4">
            <Link className="hover:border-b-2 transition-all" to="/">
              Home
            </Link>
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  className="hover:border-b-2 transition-all border-transparent"
                  to="/"
                >
                  Dishes
                </Link>
                <FaAngleDown className="cursor-pointer" />
              </div>
              <ul className="absolute hidden space-y-2 group-hover:block bg-black border rounded-md p-5 text-white">
                <li>
                  <Link to="/">Spicy</Link>
                </li>
                <li>
                  <Link to="/">Tasty</Link>
                </li>
                <li>
                  <Link to="/">Delicious</Link>
                </li>
                <li>
                  <Link to="/">Crispy</Link>
                </li>
              </ul>
            </div>

            <Link className="hover:border-b-2 transition-all" to="/">
              About
            </Link>
            <Link className="hover:border-b-2 transition-all" to="/">
              Menu
            </Link>
            <Link className="hover:border-b-2 transition-all" to="/">
              Reviews
            </Link>
            <div onClick={() => navigate('/login')}>
            <Button type={"button"} placeholder={"Login"} />
            </div>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <IoMdCloseCircle className="text-xl" onClick={handleMenu} />
            ) : (
              <MdRestaurantMenu className="text-xl" onClick={handleMenu} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-xl text-center py-4 gap-2 w-full h-fit transition-transform duration-300`}
        >
          <Link className="hover:border-b-2 transition-all" to="/">
            Home
          </Link>
          <Link
            className="hover:border-b-2 transition-all border-transparent"
            to="/"
          >
            Dishes
          </Link>
          <Link className="hover:border-b-2 transition-all" to="/about">
            About
          </Link>
          <Link className="hover:border-b-2 transition-all" to="/menu">
            Menu
          </Link>
          <Link className="hover:border-b-2 transition-all" to="/review">
            Reviews
          </Link>
          <div onClick={() => navigate('/login')}><Button type={"button"} placeholder={"Login"} /></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
