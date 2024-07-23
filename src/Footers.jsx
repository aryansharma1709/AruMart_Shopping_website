import React from 'react';
function Footers(data)
{
   return (
 <div class="bg-gray-700 flex h-20 justify-between px-6 ">
    <div class="text-white text-xs self-center">{data.copyright}</div>
   <div class="text-white text-xs self-center">{data.text}</div>
 </div> );
}
export default Footers;