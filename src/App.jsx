import React from 'react';
import ProductListPage from './ProductListPage';
import {Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import {useState} from 'react';
import Navbar from './Navbar';
import Footers from './Footers';
import NotFound from './NotFound';
function App() {
    const dataString=localStorage.getItem("my-cart") || "{}";
    const savedData=JSON.parse(dataString);
  const [cart, setCart] =useState(savedData);
   function handleAddToCart(productId,count){
     const oldCount=cart[productId] || 0;
     const newCart={...cart, [productId]: oldCount+ count };
     setCart(newCart);
     const cartString=JSON.stringify(newCart);
     localStorage.setItem("my-cart",cartString);
   }
  const totalCount=Object.keys(cart).reduce(function(previous,current){
    return previous+cart[current];
  },0);
 return(
   <>
   <div className="bg-gray-200  h-screen overflow-scroll">
    <Navbar   productCount={totalCount} />
     <div >
    <Routes>
      <Route index element={<ProductListPage/>}></Route>
      <Route path="/details/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} ></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
     </div>
     </div>
      <Footers copyright="Copyright @ 2024 | AruMart" text="Powered by AruMart" />
        </>
 );
}
export default App;