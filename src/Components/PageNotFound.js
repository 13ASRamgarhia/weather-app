import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="App bg-bgColor flex justify-center items-center min-h-screen font-tahoma">
      <div>
        <div className="card bg-white rounded-md h-fit w-80 px-6 py-4 flex flex-col space-y-4">
          <div className="flex flex-col text-center space-y-0">
            <p className="text-xl">ERROR 404!</p>
            <p className="text-xl">Page not found</p>
          </div>

          <Link
            to="/"
            className="text-white focus:text-white hover:text-white focus:outline-none font-medium rounded-lg text-lg"
          >
            <div className=" text-center bg-bgColor rounded-lg px-3 py-1">
              Go back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
