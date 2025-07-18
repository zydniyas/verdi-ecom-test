import React from "react";
import Nav from "../../components/client/common/Nav";
import LogInForm from "../../components/client/login/LogInForm";
import { Toaster } from "react-hot-toast";

function LoginPage() {
  return (
    <>
      <Nav />
      <LogInForm />
      <Toaster />
    </>
  );
}

export default LoginPage;
