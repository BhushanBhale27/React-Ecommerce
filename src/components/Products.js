import React from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Easy Shooping Daily Shooping
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        "Experience seamless online shopping like never before. Discover a wide range of products, unbeatable prices, and exceptional customer service, all at the convenience of your fingertips. Shop now and indulge in a delightful shopping experience with our eCommerce website."
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
};

export default Products;
