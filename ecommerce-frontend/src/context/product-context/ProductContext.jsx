import { createContext, useEffect, useState } from "react";

import api from "../../../axiosInstance";
import { useAppContext } from "../AppContextProvider";

const ProductContext = createContext({});

export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { setIsLoading } = useAppContext();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const productRes = await api.get("/products");
        setProducts(productRes.data);
        console.log("products :", productRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
