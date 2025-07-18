import React from "react";
import RegisterForm from "../../components/client/register/RegisterForm";
import Nav from "../../components/client/common/Nav";
import { Toaster } from "react-hot-toast";

function RegisterPage() {
  return (
    <>
      <Nav />
      <RegisterForm />
      <Toaster />
    </>
  );
}

export default RegisterPage;
