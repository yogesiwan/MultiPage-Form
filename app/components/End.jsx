"use client";

import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const End = () => {
  const { setProgress } = useContext(AppContext);
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center w-full p-8 bg-gray-100">
    
        <Link href="/" className="text-blue-500 hover:underline mb-6 text-2xl" onClick={() => setProgress(0)}>
          Go Back to the Form
        </Link>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Check My Other Projects Too
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="calendar_thumbnail.jpeg"
              alt="Calendar App Thumbnail"
              className="w-full h-100 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Calendar App
            </h2>
            <p className="text-gray-600 mt-2">A calendar scheduling app.</p>
            <div className="mt-4 space-y-2">
              <a
                href="https://calendarapp-06.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Link
              </a>
              <a
                href="https://github.com/yogesiwan/Calendar_Project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Link
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="shop_thumbnail.jpeg"
              alt="E-Commerce App Thumbnail"
              className="w-full h-100 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              E-Commerce App
            </h2>
            <p className="text-gray-600 mt-2">
              An online store for various products.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="https://nile-ezvi.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Link
              </a>
              <a
                href="https://github.com/yogesiwan/nile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Link
              </a>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img
              src="tomato_thumbnail.jpeg"
              alt="Food Ordering Webapp Thumbnail"
              className="w-full h-100 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              Food Ordering Webapp
            </h2>
            <p className="text-gray-600 mt-2">Order food online with ease.</p>
            <div className="mt-4 space-y-2">
              <a
                href="https://tomato-eight-xi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Live Link
              </a>
              <a
                href="https://github.com/yogesiwan/Tomato"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default End;
