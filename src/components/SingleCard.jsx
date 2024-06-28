import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ title, desc, src, to }) => {
  return (
    <Link to={to}>
      <div>
        <div className="bg-white max-w-80 dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <img src={src} className="h-6 w-6 object-cover" alt="" />
            </span>
          </div>
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
