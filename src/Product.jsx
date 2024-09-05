import React from 'react';
import { Link } from 'react-router-dom';

function Product({ pic ,category, title, price, id }) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-sm gap-y-2 p-4 max-w-xs hover:shadow-md  hover:shadow-primary-dark transition duration-200 ease-in-out">
      <div className="w-full aspect-square overflow-hidden rounded-md">
        <img src={pic} className="w-full h-full object-cover" alt="Product" />
      </div>
      <h2 className="text-gray-500 text-xs md:text-sm lg:text-md mt-2">{category}</h2>
      <h1 className="text-black text-xs md:text-sm lg:text-md font-semibold">{title}</h1>
      <div className="flex space-x-1 mt-1">
      <div class="text-primary-light text-xs">✰ ✰ ✰ ✰ ✰</div>
      
      </div>
      <div className="text-sm font-semibold mt-2">$ {price}</div>
      <Link to={`/ProdDet/${id}`} className="text-xs text-red-600 hover:text-red-800 transition-colors duration-150">View Details...</Link>
    </div>
  );
}

export default Product;
