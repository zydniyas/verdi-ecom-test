import React, { createContext, useContext, useState } from "react";
``;
import api from "../../axiosInstance";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, _setUser] = useState(() => {
    return localStorage.getItem("userEmail") || null;
  });
  const [token, _setToken] = useState(() => {
    return localStorage.getItem("authToken") || null;
  });

  const setToken = (newToken) => {
    if (newToken) {
      localStorage.setItem("authToken", newToken);
    } else {
      localStorage.removeItem("authToken");
    }
    _setToken(newToken);
  };

  const setUser = (userEmail) => {
    if (userEmail) {
      localStorage.setItem("userEmail", userEmail);
    } else {
      localStorage.removeItem("userEmail");
    }
    _setUser(userEmail);
  };
  function refreshPage() {
    window.location.reload();
  }

  async function logOut() {
    try {
      refreshPage();
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      const response = await api.post(`/logout`);
      return response.data;
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, logOut, refreshPage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
