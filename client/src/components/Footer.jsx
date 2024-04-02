import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white sm:py-20 py-10 sm:px-10 px-5">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex">
          
          <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
            <h3 className="text-2xl font-bold mb-4">Select Your Country/region:</h3>
            <form className="mt-2 flex">
              <input
                type="email"
                className="p-2 placeholder-gray-50 bg-gray-600 hover:placeholder-white hover:bg-gray-700"
                placeholder="region"
              />
              <input
                type="email"
                className="p-2 placeholder-gray-50 bg-gray-600 ml-2 hover:placeholder-white hover:bg-gray-700"
                placeholder="country"
              />
            </form>
          </div>
        </div>
        <hr className="h-px mt-6 bg-gray-700 border-none" />
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div className="text-center md:text-left">
            <p>&copy; 2021 Your Company. All rights reserved.</p>
          </div>
          <div className="flex mt-4 md:m-0">
            <a href="#" className="mx-1 text-gray-600 hover:text-gray-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.47 2 2 6.47 2 12c0 5.23 3.99 9.51 9 9.97V15H7v-3h4v-2c0-3.86 2.77-7.14 6.44-7.83c0.48-0.09 0.65-0.21 0.65-0.38 c0-0.17-0.01-0.39-0.01-0.63c0-1.77-1.01-3.09-3.12-3.09c-1.08 0-1.99 0.81-1.99 1.79c0 1.09 0.69 2.73 2.47 4.54 c0.58 0.56 1.25 1.19 1.25 2.89v2h4v3h-4v6.97c-0.01 0.01-0.02 0.02-0.03 0.03C18.01 21.51 22 17.23 22 12 C22 6.47 17.53 2 12 2z"></path>
              </svg>
            </a>
            <a href="#" className="mx-1 text-gray-600 hover:text-gray-700">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21
                                3H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14v-5h2v5h3l-4 4-4-4h3z"
                ></path>
              </svg>
            </a>
            <a href="#" className="mx-1 text-gray-600 hover:text-gray-700">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M8 2L8 6"></path>
                <path d="M16 2L16 6"></path>
                <path d="M12 2L12 6"></path>
                <path d="M4 8L4 16"></path>
                <path d="M20 8L20 16"></path>
                <path d="M16 12L8 12"></path>
                <path d="M12 16L12 16"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
