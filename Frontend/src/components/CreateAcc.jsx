import React from "react";

const CreateAccount = () => {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="ml-14 p-8 mb-20 w-full max-w-md">
        <nav className="text-sm mb-4 text-gray-600">
          <a href="/" className="hover:text-black">
            Home
          </a>{" "}
          &gt; Create Account
        </nav>
        <h2 className="text-2xl font-bold mb-4">CREATE ACCOUNT</h2>
        <p className="text-sm text-gray-600 mb-6">
          Please register below to create an account
        </p>
        <form >
          <div className="mb-4 w-[110%]">
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              className="w-full px-3 py-3 border "
              placeholder="First Name"
            />
          </div>
          <div className="mb-4 w-[110%]">
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              className="w-full px-3 py-3 border "
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4 w-[110%]">
            <label className="block text-sm font-medium mb-1">
              Your Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-3 py-3 border "
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb-4 w-[110%]">
            <label className="block text-sm font-medium mb-1">
              Your Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-3 py-3 border "
              placeholder="Your Password"
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="subscribe"
              className="h-4 w-4 mr-2 border-gray-300"
            />
            <label htmlFor="subscribe" className="text-sm">
              Subscribe To Email Marketing
            </label>
          </div>
          <button
            type="submit"
            className="w-[80%] bg-black text-white py-3 border-2 border-black transition transform  duration-800 hover:-translate-y-1  hover:bg-white hover:text-black"
          >
            CREATE AN ACCOUNT
          </button>
        </form>
      </div>
    // </div>
  );
};

export default CreateAccount;
