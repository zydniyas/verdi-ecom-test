import React, { useContext } from "react";
import Nav from "../../components/client/common/Nav";
import { useAuthContext } from "../../context/AuthContextProvider";
import { Avatar } from "flowbite-react";

function UserProfile() {
  const { user } = useAuthContext();

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center  py-36">
        {/* Profile Section */}
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 mb-8 ">
          <div className="flex items-center gap-4">
            <Avatar
              className="w-24 h-24 rounded-full border border-gray-300"
              alt="User settings"
              img={user?.image}
              rounded
            />
            <div>
              <h2 className="text-2xl font-semibold">{user}</h2>
              <p className="text-gray-600">{user}</p>
              <button className="mt-2 text-sm text-blue-500 hover:underline">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Account Details Section */}
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Account Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Phone Number:</p>
              <p className="text-gray-800 font-medium">+123 456 7890</p>
            </div>
            <div>
              <p className="text-gray-600">Shipping Address:</p>
              <p className="text-gray-800 font-medium">
                123 Main St, Springfield
              </p>
            </div>
            <div>
              <p className="text-gray-600">Billing Address:</p>
              <p className="text-gray-800 font-medium">
                123 Main St, Springfield
              </p>
            </div>
            <div>
              <button className="text-sm text-blue-500 hover:underline">
                Manage Addresses
              </button>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Order History</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Order #12345</p>
                <p className="text-gray-600 text-sm">Placed on: 2024-12-01</p>
              </div>
              <button className="text-sm text-blue-500 hover:underline">
                View Details
              </button>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Order #12346</p>
                <p className="text-gray-600 text-sm">Placed on: 2024-11-20</p>
              </div>
              <button className="text-sm text-blue-500 hover:underline">
                View Details
              </button>
            </li>
          </ul>
        </div>

        {/* Settings Section */}
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <button className="block text-left text-blue-500 hover:underline mb-2">
            Change Password
          </button>
          <button className="block text-left text-blue-500 hover:underline">
            Manage Notifications
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
