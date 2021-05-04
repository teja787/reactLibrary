import axios from "axios";
import React, { useEffect, useState } from "react";
import { IBook } from "./@types";

export default function SearchBook() {
  const [search, setsearch] = useState("");
  const [booksList, setbook] = useState<IBook[]>([]);
  const searchingBook = () => {
    axios
      .get("http://localhost:8000/searchBook", {
        params: { searchString: search },
      })
      .then((res) => {
        console.log(res.data);
        setbook(res.data);
      });
  };
  const onStringEntry = (event: any) => {
    setsearch(event.target.value);
    searchingBook();
  };
  return (
    <section className="text-gray-600 body-font h-full overflow-y-auto bg-gradient-to-tr from-red-200 via-red-300 to-yellow-200 opacity-">
      <div className="grid-container px-5 py-8 mx-auto">
        <input
          type="text"
          onInput={onStringEntry}
          placeholder="search books"
          className="form-input px-3 text-sm py-1 rounded-full mb-2"
        />
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-200 bg-white">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1"></h2>
                <p className="font-semibold text-sm text-gray-400"></p>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                <p className="leading-relaxed"></p>
                <button className="bg-gray-200 rounded text-black px-2 py-1 text-sm mt-4 hover:bg-blue-500 hover:text-white">
                  Buy Book
                </button>
                <button className="bg-gray-200 rounded text-black px-2 py-1 text-sm ml-5 mt-4 hover:bg-blue-500 hover:text-white">
                  Rent Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
