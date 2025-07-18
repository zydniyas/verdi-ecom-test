import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../../context/cart-context/CartContext";
import Skelton from "./Skelton";
import api from "../../../../axiosInstance";
function DetailsCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart, addToCart } = useContext(CartContext);
  const { setIsOpen } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
        console.log("selected product:", response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }

    fetchProduct();
  }, [id]);
  if (!product) return <Skelton />;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-36">
        <div className="grid grid-cols-2 -mx-4">
          {/* Product Images */}
          <div className=" p-4 mb-8 flex items-center justify-center rounded-lg shadow-md  bg-white mx-14 ">
            <div className="">
              <img
                src={product.image}
                alt="Product"
                className="max-w-xs mx-auto"
              />
              {/* <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {product?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(image)}
                  />
                ))}
              </div> */}
            </div>
          </div>

          {/* Product Details */}
          <div className=" px-4">
            <h2 className="text-3xl font-bold mb-2">{product?.title}</h2>
            <p className="text-gray-600 mb-4">SKU: {product?.id}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product?.price}</span>
              {/* <span className="text-gray-500 line-through">
                $
                {product?.discountPercentage
                  ? (
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)
                  : ""}
              </span> */}
            </div>
            <div className="flex items-center mb-4">
              {/* Star Ratings */}
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 ${
                      index < Math.round(product.rating.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <span className="ml-2 text-gray-600">
                {product?.rating.rate} ({product?.stock} reviews)
              </span>
            </div>
            <p className="text-gray-700 mb-6">{product?.description}</p>

            <div className="flex space-x-4 mb-6">
              {cart.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  View in Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    addToCart(product);
                  }}
                  className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Add to Cart
                </button>
              )}
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none">
                Wishlist
              </button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product?.specifications &&
                  product.specifications.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
