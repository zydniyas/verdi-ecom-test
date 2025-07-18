import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import UserRouter from "./routes/UserRouter";

import { ProductDataProvider } from "./context/product-context/ProductContext/";
import { CartDataProvider } from "./context/cart-context/CartContext";
import { AppContextProvider } from "./context/AppContextProvider";
import { AuthContextProvider } from "./context/AuthContextProvider";

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <ProductDataProvider>
            <CartDataProvider>
              <Routes>
                <Route path="/*" element={<UserRouter />}></Route>
              </Routes>
            </CartDataProvider>
          </ProductDataProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
