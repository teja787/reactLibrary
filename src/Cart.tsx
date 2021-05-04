import React from "react";

export default function Cart() {
  return (
    <div className="w-full bg-gradient-to-tr from-red-200 via-red-300 to-yellow-20 px-4 py-4 h-screen overflow-x-hidden">
      <div className="flex justify-between border-b pb-2">
        <h1 className="font-semibold text-sm">Shopping Cart</h1>
        <h2 className="font-semibold text-sm">3 Items</h2>
      </div>
      <div className="flex mt-4 mb-2">
        <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
          Product Details
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Quantity
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Price
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Rent Price
        </h3>
        <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
          Total
        </h3>
      </div>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-2 py-2">
        <div className="flex w-2/5">
          <div className="w-16">
            <img className="h-12" src="" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-1 flex-grow">
            <span className="font-semibold text-sm">The Age Of Light</span>
            <span className="text-red-500 text-xs">WHTINEY SCHARER</span>
            <a
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
          <input
            className="mx-2 border text-center w-8 p-1"
            type="text"
            defaultValue="1"
          />
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>

      <div className="flex items-center hover:bg-gray-100 -mx-8 px-4 py-2">
        <div className="flex w-2/5">
          <div className="w-16">
            <img className="h-12" src="" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-1 flex-grow">
            <span className="font-semibold text-sm">The Age Of Light</span>
            <span className="text-red-500 text-xs">WHTINEY SCHARER</span>
            <a
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
          <input
            className="mx-2 border text-center w-4 "
            type="text"
            defaultValue="1"
          />
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$400.00</span>
      </div>

      <div className="flex items-center hover:bg-gray-100 -mx-8 px-4 py-2">
        <div className="flex w-2/5">
          <div className="w-16">
            <img className="h-12" src="" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-1 flex-grow">
            <span className="font-semibold text-sm">The Age Of Light</span>
            <span className="text-red-500 text-xs">WHTINEY SCHARER</span>
            <a
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
          <input
            className="mx-2 border text-center w-4 h-4 text-sm"
            type="text"
            defaultValue="1"
          />
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$40.00</span>
      </div>

      <div className="flex items-center hover:bg-gray-100 -mx-8 px-4 py-2">
        <div className="flex w-2/5">
          <div className="w-16">
            <img className="h-12" src="" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-1 flex-grow">
            <span className="font-semibold text-sm">The Age Of Light</span>
            <span className="text-red-500 text-xs">WHTINEY SCHARER</span>
            <a
              href="#"
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
          <input
            className="mx-2 border text-center w-4 h-4 text-sm"
            type="text"
            defaultValue="1"
          />
          <button className="px-3 hover:bg-blue-500 rounded">
            <svg className="fill-current text-black w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
          </button>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
        <span className="text-center w-1/5 font-semibold text-sm">$150.00</span>
      </div>

      <a
        href="/"
        className="inline-flex font-semibold text-indigo-600 text-sm mt-10"
      >
        <svg
          className="fill-current mr-2 text-indigo-600 w-4"
          viewBox="0 0 448 512"
        >
          <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
        </svg>
        Continue Shopping
      </a>
      <button className="float-right px-3 py-1 bg-blue-400 hover:bg-blue-500 hover:text-white border-2 border-gray-600 rounded text-sm mt-7">
        Proceed to Payment
      </button>
    </div>
  );
}
