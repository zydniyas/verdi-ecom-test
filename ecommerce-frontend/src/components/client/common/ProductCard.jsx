import React, { Fragment, useContext } from "react";
import ProductContext from "../../../context/product-context/ProductContext";
import CartContext from "../../../context/cart-context/CartContext";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Skelton from "../detailsPage/Skelton";

function ProductCard() {
  const { products } = useContext(ProductContext);
  const { cart, setCart, addToCart } = useContext(CartContext);
  const { setIsOpen } = useContext(CartContext);
  const navigate = useNavigate();
  // const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="grid grid-cols-4 gap-5 p-5 py-20 max-w-max mx-auto">
      {products?.map((product, index) => (
        <div
          key={product.id}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 max-w-sm"
        >
          <div className="h-56 w-full">
            <a href="#">
              <img
                className="mx-auto h-full dark:hidden"
                src={product.image}
                alt=""
              />
              <img
                className="mx-auto hidden h-full dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                alt=""
              />
            </a>
          </div>
          <div className="pt-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                {/* Up to {product.discountPercentage}% off */}
              </span>

              <div className="flex items-center justify-end gap-1">
                <button
                  onClick={() => navigate(`/products/${product.id}`)}
                  type="button"
                  data-tooltip-target="tooltip-quick-look"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Quick look</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </button>
                <div
                  id="tooltip-quick-look"
                  role="tooltip"
                  className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  data-popper-placement="top"
                >
                  Quick look
                  <div className="tooltip-arrow" data-popper-arrow=""></div>
                </div>

                <button
                  type="button"
                  data-tooltip-target="tooltip-add-to-favorites"
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Add to Favorites</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    ></path>
                  </svg>
                </button>
                <div
                  id="tooltip-add-to-favorites"
                  role="tooltip"
                  className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  data-popper-placement="top"
                >
                  Add to favorites
                  <div className="tooltip-arrow" data-popper-arrow=""></div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
            >
              {product.title}
            </a>

            <div className="mt-2 flex items-center gap-2">
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>

                <svg
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {product.rating.rate}
              </span>
            </div>

            <div className="my-4 flex items-center justify-between gap-4">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>

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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
