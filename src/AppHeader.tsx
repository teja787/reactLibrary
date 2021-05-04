import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IBook } from "./@types";
import AppIcon from "./Assets/AppIcon.svg";

export default function AppHeader() {
  return (
    <header className="text-gray-600 w-full body-font border-b bg-gradient-to-tr from-purple-500 to-yellow-400 bg-transparent shadow-xl border-black">
      <div className="flex flex-wrap py-1 flex-col md:flex-row items-center px-2">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src={AppIcon}
            className="w-8 p-2 h-8 bg-white rounded-full"
            alt="appIcon"
          />
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="hover:bg-gray-500 hover:text-white font-semibold rounded-md text-black text-md px-2 py-1"
          >
            Home
          </Link>
          <Link
            to="/AddBook"
            className="hover:bg-gray-500 hover:text-white font-semibold rounded-md text-black ml-3 text-md px-2 py-1"
          >
            Add Book
          </Link>
          <Link
            to="/SearchBook"
            className="hover:bg-gray-500 hover:text-white font-semibold rounded-md text-black ml-3 text-md px-2 py-1"
          >
            Search Book
          </Link>
        </nav>
        <a
          href="/Cart"
          className="flex title-font font-medium items-center text-gray-900 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3  text-black hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </a>

        {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
}
