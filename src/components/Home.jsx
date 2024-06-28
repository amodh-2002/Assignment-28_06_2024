import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-xl flex items-center mx-auto justify-between h-[90vh]">
      <div className="flex justify-center items-center">
        <Link
          target="_blank"
          to="/cards"
          className="w-1/2 flex flex-col items-center justify-center space-y-6 text-center"
        >
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            <img
              src="/card.png"
              alt="card"
              width={620}
              className=" object-cover rounded-lg shadow-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Cards that make you go yayayyyy!!
              </h1>
              <button className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                Explore!
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <Link
          target="_blank"
          to="/grid"
          className="w-1/2 flex flex-col items-center justify-center space-y-16 text-center"
        >
          <div className="w-full flex flex-col items-center justify-center space-y-6">
            <img
              src="/grid.png"
              alt="grid"
              className="max-w-[420px] object-cover rounded-lg shadow-lg"
            />
            <div className="">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Grid that lets you make your work easy
              </h1>
              <button className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                Explore!
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
