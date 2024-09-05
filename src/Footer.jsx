import React, { memo } from "react";

function Footer() {
  return (
    <div className="w-full bg-gray-700  px-4 py-4 shadow-lg">
      <div className="flex max-w-6xl mx-auto items-center h-10 justify-between text-sm text-gray-800">
        <h1 className="text-white text-center">
          Copyright © 2024 | AruMart
        </h1>
        <h1 className="text-white text-center">
           Powered by AruMart
        </h1>
      </div>
    </div>
  );
}

const newFooter = memo(Footer);
export default newFooter;