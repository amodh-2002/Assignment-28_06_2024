import React from "react";
import { useNavigate } from "react-router-dom";

const Card2 = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex max-w-screen-xl items-center justify-center h-[90vh] mx-auto flex-col gap-10">
      <div>
        <div className="bg-white max-w-80 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <img src="/grid.png" className="h-6 w-6 object-cover" alt="" />
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Dark Mode
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            Now that dark mode is a first-class feature of many operating
            systems, it’s becoming more and more common to design.
          </p>
        </div>
      </div>
      <button
        onClick={navigateToHome}
        className="px-6 py-2 bg-yellow-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
      >
        Go to home
      </button>
    </div>
  );
};

export default Card2;
