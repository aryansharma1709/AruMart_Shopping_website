import React from 'react';
import { Link } from 'react-router-dom';
function NotFound(){
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <img class="w-1/2" src="https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?t=st=1721639647~exp=1721643247~hmac=dec0c8805b6abb8c6f86ae106d004991c7db56f5a2c88dddca45197f8d5fa5a8&w=996"/>
       <div className="text-3xl text-primary-dark"> PAGE NOT FOUND</div>
     <Link to="/"><button className="text-white bg-primary-dark border rounded-md px-2 ">Go to Home</button> 
    </Link>
    </div>
  );
}
export default NotFound;