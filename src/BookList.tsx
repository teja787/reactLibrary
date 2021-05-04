import React, { useState, useEffect } from "react";
import axios from "axios";
import { fdatasync } from "node:fs";
import { IBook } from "./@types";

export default function BookList() {
  //   axios.get("http://localhost:8000/addBook").then((res) => {
  //     console.log(res.data);
  //   });

  const [formData, setformData] = useState([]);
  const [booksList, setbooksList] = useState<IBook[]>([]);
  const dataReceived = (searchString = "") => {
    axios
      .get("http://localhost:8000/booksList", {
        params: {
          searchString,
        },
      })
      .then((res) => {
        console.log(res.data);
        setbooksList(res.data);
      });
  };

  const onRent = () => {
    booksList.filter((book) => {
      book.availableCount--;
    });
    console.log(booksList);
  };
  useEffect(() => {
    dataReceived();
  }, []);
  return (
    <section className="text-gray-600 body-font h-full overflow-y-auto bg-gradient-to-tr from-red-200 via-red-300 to-yellow-200 opacity-">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -m-4">
          {booksList.map((book) => (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={book.id}>
              <div className="flex relative">
                <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-200 bg-white">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    {book.bookName}
                  </h2>
                  <p className="font-semibold text-sm text-gray-400">
                    {book.authorName}
                  </p>
                  <p> {book.discription}</p>
                  <p>{book.availableCount}</p>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3"></h1>
                  <p className="leading-relaxed"></p>
                  <button className="bg-gray-200 rounded text-black px-2 py-1 text-sm mt-4 hover:bg-blue-500 hover:text-white">
                    Buy Book
                  </button>
                  <button
                    onClick={onRent}
                    className="bg-gray-200 rounded text-black px-2 py-1 text-sm ml-5 mt-4 hover:bg-blue-500 hover:text-white"
                  >
                    Rent Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
