import React from "react";
import imgData from "../components/Image";
import { useState } from "react";
const Display = () => {
  const [img, Setimg] = useState(0);
  const inc = () => {
    if (img > 8) Setimg(0);
    else Setimg(img + 1);
  };
  const dec = () => {
    if (img === 0) Setimg(9);
    else Setimg(img - 1);
  };

  return (
    <div className="py-8 flex justify-center">
      <div className="w-2/4">
        <div className=" h-64">
          <img
            alt="img"
            className="w-full h-full"
            src={imgData.data[img].url}
          ></img>
        </div>
        <h3 className="text-center ">{imgData.data[img].id}</h3>
        <div className="flex pt-4 justify-center ">
          <button
            onClick={dec}
            className="bg-gray-600 px-6 py-2 text-white hover:bg-gray-800"
          >
            Decrement
          </button>
          <button
            onClick={inc}
            className="bg-gray-600 px-6 py-2 text-white hover:bg-gray-800 ml-4"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Display;
