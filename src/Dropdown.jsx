import React from "react";
import { memo } from 'react';

function Dropdown({ handleSortChange, sort }) {
  return (
    <div className="relative inline-block w-full max-w-xs">
      <select 
        className="border rounded-md border-gray-200"
        name="sort" 
        id="def-sorting" 
        onChange={handleSortChange} 
        value={sort}
      >
        <option value="default">Default sorting</option>
        <option value="title">Sort by Name</option>
        <option value="lowToHigh">Price: low to high</option>
        <option value="highToLow">Price: high to low</option>
      </select>
    </div>
  );
}

const newDrop = memo(Dropdown);
export default newDrop;