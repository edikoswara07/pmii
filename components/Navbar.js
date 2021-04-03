import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-gray-900 border-b-2 border-indigo-500 shadow-md">
        <div className="container px-4 mx-auto py-4">
          <div className="flex flex-row items-center justify-between sm:flex-row">
            <div>
              <a className="px-4 py-1 text-2xl font-bold text-indigo-100 hover:bg-indigo-500 rounded-md cursor-pointer">
                PMII
              </a>
            </div>

            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 bg-indigo-800 hover:bg-indigo-700 rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    className={!isOpen ? "block" : "hidden"}
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    className={isOpen ? "block" : "hidden"}
                  />
                </svg>
              </button>
            </div>

            <div className="hidden sm:block">
              <a className="px-3 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 rounded-md">
                Home
              </a>
              <a className="px-3 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 rounded-md">
                About Us
              </a>
              <a className="px-3 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 rounded-md">
                Contact Us
              </a>
              <a className="px-3 py-2 text-sm font-medium text-indigo-100 hover:bg-indigo-500 rounded-md">
                FAQs
              </a>
            </div>
          </div>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } transition delay-700 container px-4 py-2 mx-auto sm:hidden`}
        >
          <div className="flex flex-col justify-start">
            <a className="px-3 py-2 font-normal text-indigo-100 hover:bg-indigo-500 rounded-md font-sm hover:text-indigo-200 cursor-pointer">
              Home
            </a>

            <a className="px-3 py-2 font-normal text-indigo-100 hover:bg-indigo-500 rounded-md font-sm hover:text-indigo-200 cursor-pointer">
              About Us
            </a>

            <a className="px-3 py-2 font-normal text-indigo-100 hover:bg-indigo-500 rounded-md font-sm hover:text-indigo-200 cursor-pointer">
              Contact Us
            </a>

            <a className="px-3 py-2 font-normal text-indigo-100 hover:bg-indigo-500 rounded-md font-sm hover:text-indigo-200 cursor-pointer">
              Faqs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
