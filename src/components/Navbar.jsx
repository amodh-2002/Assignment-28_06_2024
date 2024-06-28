import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <nav className="max-w-screen-xl container mx-auto flex justify-between items-center h-16">
        <div>
          <h1 className="text-white text-lg">
            <Link to="/" className="hover:text-gray-300">
              ExpImp
            </Link>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-8">
            <li>
              <NavLink to="/" className="text-white hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cards" className="text-white hover:text-gray-300">
                Cards
              </NavLink>
            </li>
            <li>
              <NavLink to="/grid" className="text-white hover:text-gray-300">
                Grid
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
