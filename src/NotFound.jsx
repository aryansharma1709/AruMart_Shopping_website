import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center w-[65vw] grow bg-red-50 rounded-lg shadow-lg border border-red-200">
      <h1 className="text-9xl text-red-600">404</h1>
      <h1 className="text-2xl text-red-700 font-semibold mt-4">Page Not Found</h1>
      <h2 className="text-red-500 mt-2">Wrong URL...</h2>
      <img class="w-80" src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?t=st=1721639647~exp=1721643247~hmac=dec0c8805b6abb8c6f86ae106d004991c7db56f5a2c88dddca45197f8d5fa5a8&w=996"/>
      <Link to="/"><button className="text-white bg-primary-dark border rounded-md px-2 ">Go to Home</button> 
    </Link>
    </div>
  );
}

export default NotFound;
