import React, { useState, useMemo } from 'react';
import ProductListPage from './ProductListPage';
import {Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Navbar from './Navbar';
import Footers from './Footers';
import NotFound from './NotFound';
import Login from './Login';
import Sign from './Sign';
import Forgot from './Forgot';
function App() {
  const [cart, setCart] =useState({});
   function handleAddToCart(productId,count){
     const oldCount=cart[productId] || 0;
     setCart({...cart,[productId]:oldCount+count});
   }
  const totalCount=useMemo(()=>{
    return Object.keys(cart).reduce((previous,current)=>
   previous+cart[current]
  ,0)},[cart]);
 return(
   <>
   <div className="bg-gray-200  h-screen overflow-scroll">
    <Navbar  productCount={totalCount} />
     <div >
    <Routes>
      <Route index element={<ProductListPage/>}></Route>
      <Route path="/details/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} ></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgot" element={<Forgot/>}></Route>
      <Route path="/sign" element={<Sign/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Routes>
     </div>
     </div>
      <Footers copyright="Copyright @ 2024 | AruMart" text="Powered by AruMart" />
        </>
 );
}
export default App;