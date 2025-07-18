import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../axiosInstance";
import toast from "react-hot-toast";
const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const inputDefualt =
    "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-2 focus-visible:outline-blue-500 dark:bg-gray-700 dark:border-gray-600  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const inputError =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 focus-visible:outline-2 focus-visible:outline-red-500  dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
  const inputSuccess =
    "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 focus:ring-green-500 focus:border-green-500 focus-visible:outline-2 focus-visible:outline-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500 dark:border-green-500";

  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        inputError,
        inputDefualt,
        inputSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
