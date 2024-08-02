import React from 'react';
import  Product from './Product';
function ProductList({products}){
  return (
    <>
    <div className="md:grid gap-4 grid-cols-3 space-y-2 md:space-y-0" >
      {
        products.map(function(item) {
        return( <Product 
                 key={item.title} 
                  {...item} />);
      })
      }
    </div>
      <div class="m-2 flex space-x-2 items-center">
         <button class="border border-primary-default hover:bg-primary-default hover:text-white px-4 py-2 text-primary-default">1</button>
         <button class="border border-primary-default hover:bg-primary-default hover:text-white px-4 py-2 text-primary-default">2</button>
         <button class="border-2 border-primary-default hover:bg-primary-default hover:text-white text-primary-default px-3 py-1 text-xl">→</button>
       </div>
    </>
  );
}
export default ProductList;