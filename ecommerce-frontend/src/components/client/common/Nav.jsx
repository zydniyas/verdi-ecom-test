import React, { useContext } from "react";
("use client");

import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import CartContext from "../../../context/cart-context/CartContext";
import SearchInput from "./SearchInput";
import { useAuthContext } from "../../../context/AuthContextProvider";

function Nav() {
  const { setIsOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const { logOut, user } = useAuthContext();
  console.log("user:", user);
  const handleLogout = () => {
    logOut();
  };

  return (
    <Navbar
      className="bg-blue-500 rounded-[0px] fixed top-0 left-0 w-full z-30 "
      fluid
      rounded
    >
      <Navbar.Brand href="/">
        <img
          src="data:image/png;base64,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"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          e-shop
        </span>
      </Navbar.Brand>

      <div className="flex items-center  md:order-2 gap-5 ">
        <SearchInput />
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="text-white   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
            />
          </svg>
        </button>
        {user === null ? (
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="bg-white text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 "
          >
            Log in
            <svg
              className="w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        ) : (
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img={user?.image} rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{user}</span>
              <span className="block truncate text-sm font-medium">{user}</span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => navigate("profile")}>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => handleLogout()}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-white" href="/">
          Home
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          About
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Services
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link className="text-white" href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
