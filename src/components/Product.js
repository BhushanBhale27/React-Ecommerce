import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

const Product = () => {
  const [deatils, setDetails] = useState({});
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div>
          <img
            className="w-full h-[550px] object-cover"
            src={deatils.image}
            alt="productPage"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{deatils.title}</h2>
            <div className="flex items-center gap-5 mt-3">
              <p className="line-through text-gray-500">₹ {deatils.oldPrice}</p>
              <p className="font-semibold font-sans text-xl text-gray-900s">
                ₹ {deatils.price}
              </p>
            </div>
          </div>
          <div className="flex item-center text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">( 1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{deatils.description}</p>
          <div className="flex gap-6">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                </button>
                <span>{1}</span>
                <button className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white py-3 px-6 active:bg-gray-800">
              Add To Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:<span className="font-medium capitalize">{deatils.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
