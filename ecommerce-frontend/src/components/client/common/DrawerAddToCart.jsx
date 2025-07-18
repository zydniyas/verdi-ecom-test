"use client";

import { Button, Drawer } from "flowbite-react";
import { useContext } from "react";
import CartContext from "../../../context/cart-context/CartContext";
import { HiShoppingCart } from "react-icons/hi";
import CheckoutForm from "../checkout/CheckoutForm";

import { showToast } from "./ToastProvider";
import { useAuthContext } from "../../../context/AuthContextProvider";

export function DrawerAddToCart() {
  const {
    isOpen,
    setIsOpen,
    handleClose,
    cart,
    removeFromCart,
    totalPrice,
    setCheckout,
    checkout,
    decreaseQuantity,
    increaseQuantity,
  } = useContext(CartContext);

  const { user } = useAuthContext();
  console.log("cart:", cart);

  return (
    <>
      <Drawer
        className="w-3/12 z-40"
        open={isOpen}
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header titleIcon={HiShoppingCart} title="Your Cart" />
        {cart?.length > 0 && checkout === false ? (
          <Drawer.Items>
            {/* Cart Item 1*/}
            {cart?.map((item, index) => (
              <div
                key={index}
                className="mb-4 flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center">
                  {/* Product Image */}
                  <img
                    src={item.thumbnail}
                    alt="Product"
                    className="mr-4 h-16 w-16 rounded object-cover"
                  />
                  {/* Product Details */}
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
                    {/* Quantity Controls */}
                    <div className="mt-2 flex items-center space-x-2">
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => {
                          decreaseQuantity(item.id);
                        }}
                      >
                        -
                      </button>
                      <span className="text-sm text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        className="px-2 py-1 bg-gray-200 rounded"
                        onClick={() => {
                          increaseQuantity(item.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* Remove Button */}
                <button
                  className="text-sm text-red-500 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-medium text-gray-900">Total</span>
                <span className="text-lg font-medium text-gray-900">
                  ${totalPrice}
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              {/* Checkout Button */}
              <button
                onClick={() =>
                  user != null
                    ? setCheckout(true)
                    : showToast("error", "Please login to purchase")
                }
                className="mt-4 w-full rounded bg-cyan-600 px-4 py-2 text-center text-white hover:bg-cyan-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </Drawer.Items>
        ) : cart?.length === 0 && checkout === false ? (
          <Drawer.Items>
            <div className="mt-6 border-t pt-4 text-center">
              <p className="mt-1 text-sm text-gray-500">Your Cart is Empty!.</p>
            </div>
          </Drawer.Items>
        ) : (
          <CheckoutForm />
        )}
      </Drawer>
    </>
  );
}
