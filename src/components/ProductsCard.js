import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./redux/sabkaSlice";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootID = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootID}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group">
      {/* image */}
      <div
        onClick={handleDetails}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImg"
        />
      </div>

      {/* price product name:- */}

      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-base">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex gap-2 relative overflow-hidden w-24">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">₹ {product.oldPrice}</p>
              <p className="font-semibold">₹ {product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                )
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
            >
              add to cart
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div>{product.isNew && <p>Sale</p>}</div>
      </div>
    </div>
  );
};

export default ProductsCard;
