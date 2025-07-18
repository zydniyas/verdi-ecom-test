import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastProvider = ({ children }) => (
  <>
    {children}
    <ToastContainer position="bottom-right" autoClose={3000} />
  </>
);

export const showToast = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    default:
      toast(message);
  }
};
