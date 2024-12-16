import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8 mb-[6rem]">
      {/* Page Title */}
      <div className="text-center mb-8">
        <h1 className=" text-2xl md:text-3xl font-medium text-gray-800 mb-8 mt-10">
          CONTACT US
        </h1>
        <p className="leading-7 text-sm text-[#232323] max-w-xl mx-auto">
          We love to hear from you on our customer service, merchandise, website,
          or any topics you want to share with us. Your comments and suggestions
          will be appreciated.
        </p>
      </div>

        <div className='my-5'>
      <h2 className="text-[35px] font-semibold text-gray-800 mb-4">GET IN TOUCH</h2>

        </div>
        <div className="ml-20 mb-9 w-full leading-[4rem]">
            <h2 className="font-semibold text-[18px]">Send us an email
            </h2>
            <p className="text-sm" >Ask us anything! We're here to help.</p>
        </div>

      {/* Form Section */}
      <div className="w-full ">
       

        <form className="space-y-6 mx-10">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded focus:ring-gray-500 focus:border-gray-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Comment Field */}
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="5"
              className="mt-1 block w-full p-2.5 border border-gray-300 rounded focus:ring-gray-500 focus:border-gray-500"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-left">
            <button
              type="submit"
              className="w-[20%] bg-black text-white font-bold text-xs px-10 py-4 hover:bg-white hover:text-black hover:border hover:border-black hover:-translate-y-1 transition duration-300"
            >
              SUBMIT CONTACT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
