import React,{useState ,useEffect} from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Footers from './Footers';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import {getProductList} from './api';
import Loading from './Loading';
function ProductListPage() {
  const[productlist,setProductList]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(function(){
    const list=getProductList();
    list.then(function(products){
      setProductList(products);
      setLoading(false);
    });
  },[]);
  const[query,setQuery]=useState("");
  const [sort,setSort]=useState("default");
  
    const data=productlist.filter(function(item){
      return item.title.toLowerCase().indexOf(query.toLowerCase())!=-1;
    });
  if(sort=="pricelow"){
     data.sort(function(a,b){
       return a.price-b.price;
     });
  }
  else if(sort=="pricehigh")
  {
    data.sort(function(a,b){
      return b.price-a.price;
    });
  }
  else if(sort=="name")
  {
    data.sort(function(a,b){
      return a.title > b.title? 1:-1;
    });
  }
  // else if(sort=="offer")
  // {
  //   data.sort(function(a,b)
  //             {
  //               return a.discount==null ?1:-1;
  //             });
  // }
  function handleChange(event){
    setQuery(event.target.value);
  }

  function handleSort(event){
    setSort(event.target.value);
  }
  if(loading)
  {
     return  <Loading/>;
  }
  return (
     
       <div class=" grow p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16 ">
         <input className="border border-gray-200   rounded-md mb-2" placeholder="🔍search" onChange={handleChange} value={query} ></input>
         <select onChange={handleSort} class="border  rounded-md border-gray-200 ml-2" value={sort}>
           <option value="default" >Default sorting</option>
           <option value="name" >Sort by Name</option>
           <option value="pricelow" >Sort by Price low to high</option>
            <option value="pricehigh" >Sort by Price high to low</option>
           {/* <option value="offer" >Sort by Offer</option> */}
         </select>
     {data.length>0 && <ProductList products={data} />}
     {data.length==0 && <NoMatching/>}
   </div>
  );
}

export default ProductListPage;