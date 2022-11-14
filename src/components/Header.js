import React from "react";
const Header = () => {
  return (
    <div className="bg-blue-500  justify-between flex items-center px-4 py-6 text-white">
      <h3 className="font-semibold text-3xl">Image Slider</h3>
      <p className="text-xl">
        Made with <span className="font-medium text-red-500">React</span>
      </p>
    </div>
  );
};

export default Header;
