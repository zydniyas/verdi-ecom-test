import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthContext } from "../../../context/AuthContextProvider";
import { useAppContext } from "../../../context/AppContextProvider";
import { useFormik } from "formik";
import { loginSchema } from "../../../schemas";
import { Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import api from "../../../../axiosInstance.js";

function LogInForm() {
  const onSubmit = () => {
    handleLogin();
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  const navigate = useNavigate();
  const { setUser, setToken } = useAuthContext();
  const { isLoading, setIsLoading, inputError, inputDefualt, inputSuccess } =
    useAppContext();

  async function handleLogin() {
    try {
      setIsLoading(true);
      const res = await api.post("/login", values);
      const data = res.data;

      if (data.message) {
        toast.error(data.message);
      } else if (data.token) {
        toast.success("Logged in successfully!");
        setToken(data.token);
        setUser(values.email);
        navigate("/");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        const validationErrors = err.response.data.errors;
        toast.error("Please check the form errors.");
        console.log("Validation errors:", validationErrors);
      } else if (err.response && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        console.error("Unexpected error:", err);
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center w-full justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm transform rotate-45" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-800">Rezo</span>
          </div>

          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@flowbite.com"
                  className={`pl-10 w-full rounded-lg py-2.5 px-3 border ${
                    errors.email && touched.email
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : touched.email
                      ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 shadow-sm`}
                />
              </div>
              {errors.email && touched.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  className={`pl-10 w-full rounded-lg py-2.5 px-3 border ${
                    errors.password && touched.password
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : touched.password
                      ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 shadow-sm`}
                />
              </div>
              {errors.password && touched.password && (
                <p className="mt-2 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Don't have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/register"
                className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInForm;
