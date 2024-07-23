import React from 'react';
import {Link} from 'react-router-dom';
function Product({title, category, image ,price , discount, rating, id}) {
   
  return (
    <div class=" max-w-xs relative mt-2">
      {discount>10 && (
        <div className="absolute -top-2 -right-4 bg-primary-dark text-white text-xs font-bold rounded-full px-3 py-4">
          {discount}% off
        </div>
      )}
      <div class="w-full aspect-square"> <img class="w-full h-full object-cover" src={image}></img></div>
       <div class="text-gray-200 text-xs">{category}</div>
       <div class="font-sans text-sm font-semibold" >{title}</div>
       <div class="text-primary-light text-xs">✰ ✰ ✰ ✰ ✰</div>
       <div class="text-xs font-semibold">${price}.00</div>
       <Link to={"/details/" + id} className="text-primary-light">View Details</Link>
      
     </div>
  );
}
export default Product;