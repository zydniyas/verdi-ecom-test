import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../../context/cart-context/CartContext";
import { showToast } from "../common/ToastProvider";

function CheckoutForm() {
  // State for user inputs
  const navigate = useNavigate();
  const [billingAddress, setBillingAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setIsOpen, setCart, setCheckout } = useContext(CartContext);

  const handleCheckout = (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    // Simulate a payment API call
    setTimeout(() => {
      setLoading(false);
      // Mock success or failure
      const success = Math.random() > 0.5;
      setMessage(
        success ? "Payment successful!" : "Payment failed. Try again.",
        setCart([]),
        setCheckout(false),
        setIsOpen(false),
        showToast("success", "Order Placed successfully"),
        navigate("/")
      );
    }, 2000); // Mock 2-second payment processing delay
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="w-full bg-white rounded-lg shadowr md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-1">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Checkout
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleCheckout}>
            {/* Billing Information */}
            <div>
              <label
                htmlFor="billingAddress"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Billing Address
              </label>
              <input
                type="text"
                id="billingAddress"
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="123 Main St"
                required
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="City"
                required
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="ZIP Code"
                required
              />
            </div>

            {/* Payment Information */}
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
              Payment Information
            </h2>
            <div>
              <label
                htmlFor="cardNumber"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div>
              <label
                htmlFor="expiryDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                CVV
              </label>
              <input
                type="password"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="123"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700"
            >
              {loading ? "Processing..." : "Complete Purchase"}
            </button>

            {message && (
              <p
                className={`text-sm font-light ${
                  message.includes("successful")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default CheckoutForm;
