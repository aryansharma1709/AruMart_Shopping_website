import React, { useState, useEffect, useMemo } from 'react';
import Product from './Product';
import Navbar from './Navbar';
import Footers from './Footers';
import ProductList from './ProductList';
import NoMatching from './NoMatching';
import { getProductList } from './api';
import Loading from './Loading';

function ProductListPage() {
  const [productlist, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const list = getProductList();
    list.then(function (products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const filteredData = useMemo(() => {
    return productlist.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [productlist, query]);

  const sortedData = useMemo(() => {
    const data = [...filteredData];
    if (sort === "pricelow") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "pricehigh") {
      data.sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      data.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
    return data;
  }, [filteredData, sort]);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSort(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grow p-2 max-w-6xl mx-auto bg-white px-9 py-12.5 my-16">
      <input
        className="border border-gray-200 rounded-md mb-2"
        placeholder="🔍search"
        onChange={handleChange}
        value={query}
      />
      <select
        onChange={handleSort}
        className="border rounded-md border-gray-200 ml-2"
        value={sort}
      >
        <option value="default">Default sorting</option>
        <option value="name">Sort by Name</option>
        <option value="pricelow">Sort by Price low to high</option>
        <option value="pricehigh">Sort by Price high to low</option>
        {/* <option value="offer">Sort by Offer</option> */}
      </select>
      {sortedData.length > 0 && <ProductList products={sortedData} />}
      {sortedData.length === 0 && <NoMatching />}
    </div>
  );
}

export default ProductListPage;
