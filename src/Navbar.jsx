import React from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi2";
function Navbar(data)
{
  return (
    <div class="py-2 bg-white">
        <div className=" max-w-6xl flex justify-between mx-auto items-center">
          <img className="h-20 rounded-full"src="https://images.tokopedia.net/img/cache/215-square/shops-1/2021/2/5/10746594/10746594_bbd4b59b-e751-4ec6-9b32-df6c47be5642.jpg" ></img>
          <div className="relative">
          <span className=" px-1 absolute -right-1 top-0 rounded-full bg-primary-dark text-white " >{data.productCount}</span>
         <HiOutlineShoppingBag  className="text-6xl text-primary-default"></HiOutlineShoppingBag>
          </div>
        </div>
     </div>);
}
export default Navbar;