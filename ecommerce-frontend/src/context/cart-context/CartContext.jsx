import { createContext, useEffect, useState } from "react";
import { showToast } from "../../components/client/common/ToastProvider";

const CartContext = createContext({});

export const CartDataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const handleClose = () => setIsOpen(false);

  const addToCart = (product) => {
    const data = {
      id: product.id,
      thumbnail: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
    };
    setCart((prevArray) => [...prevArray, data]);
  };

  const decreaseQuantity = (productId) => {
    setCart((prevArray) =>
      prevArray
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const increaseQuantity = (productId) => {
    setCart((prevArray) =>
      prevArray.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevArray) => prevArray.filter((item) => item.id !== productId));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        isOpen,
        setIsOpen,
        handleClose,
        removeFromCart,
        totalPrice,
        setCheckout,
        checkout,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
