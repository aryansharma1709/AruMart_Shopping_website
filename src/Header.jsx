import React, { memo } from "react";
import { Link } from "react-router-dom";
import {withUser,withCart} from "./withProvider";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Header({ countCart, user, setUser }) {
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
  }

  return (
    <>
    <div className="fixed w-full bg-white px-4 py-2 shadow-md z-10">
      <div className="flex max-w-6xl mx-auto justify-between items-center text-gray-800">
        <div className="flex flex-col sm:flex-row items-center">
          <Link to="/" className="flex items-center">
            <img 
              className="h-20 rounded-full" 
              src="https://images.tokopedia.net/img/cache/215-square/shops-1/2021/2/5/10746594/10746594_bbd4b59b-e751-4ec6-9b32-df6c47be5642.jpg" 
              alt="AruMart-Icon" 
            />
          </Link>

        </div>
         
        <div className="flex items-center space-x-4">
          {!user ? (
            <Link 
              to="/SignUp" 
              className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition"
            >
              SignUp
            </Link>
          ) : (
            <button 
              onClick={handleLogout} 
              className="bg-red-500 hover:bg-red-400 text-white rounded-md px-4 py-2 transition"
            >
              Logout
            </button>
          )}
          <Link to='/Catalogue' className="relative flex items-center">
          <HiOutlineShoppingBag className="text-5xl text-primary-default"></HiOutlineShoppingBag>
            {countCart > 0 && (
              <p className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {countCart}
              </p>
            )}
          </Link>
        </div>
      </div>
    </div>
    
    {user && (
        <div 
          className="text-xl  fixed  z-10 text-white bg-primary-default p-6 shadow-primary-dark shadow-lg rounded-full  top-20"
        >
        Hey, <span className="font-bold">{user.full_name}</span>  <span className="block"> Welcome to </span> <span className="font-bold">AruMart</span>
        </div>
      )}
   
    
    </>
  );
}

const newHeader = memo(Header);
export default withUser(withCart(newHeader));