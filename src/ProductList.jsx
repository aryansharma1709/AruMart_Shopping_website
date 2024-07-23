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
         <button class="border border-primary-default bg-primary-default text-white px-4 py-2">1</button>
         <button class="border-2 border-primary-default  text-primary-default px-4 py-2">2</button>
         <button class="border-2 border-primary-default  text-primary-default px-3 py-1 text-xl">→</button>
       </div>
    </>
  );
}
export default ProductList;