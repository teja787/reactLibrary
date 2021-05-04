import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function AddBook() {
  /**
   * 1. onClick
   * 2. onChange
   * 3. onUpdate
   * 4. onmouseover
   */
  const [formData, setformData] = useState<any>({});
  const onSubmit = () => {
    formData.availableCount = Number(formData.availableCount);
    axios.post("http://localhost:8000/addBook", formData).then((res) => {
      console.log(res.data);
      alert("Book Added sucessfully");
    });
  };
  const onInputData = (event: any) => {
    setformData((fData: any) => ({
      ...fData,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="h-screen bg-gradient-to-tr from-red-200 via-red-300 to-yellow-20">
      <div className="w-full grid place-items-center">
        <h2 className="text-3xl mt-6">Add Book</h2>
        <div className="border p-4 w-96 mt-10 rounded-md bg-opacity-50 bg-white shadow-xl">
          <div className="grid mt-4 grid-cols-2">
            <label className="col-span-1">Book Name</label>
            <input
              name="bookName"
              onChange={onInputData}
              type="text"
              className="form-input px-3 py-1 rounded-md col-span-1"
            />
          </div>
          <div className="grid mt-4 grid-cols-2">
            <label className="col-span-1">Author Name</label>
            <input
              name="authorName"
              onChange={onInputData}
              type="text"
              className="form-input px-3 py-1 rounded-md col-span-1"
            />
          </div>
          <div className="grid mt-4 grid-cols-2">
            <label className="col-span-1">No.of Copies</label>
            <input
              name="availableCount"
              onChange={onInputData}
              type="number"
              className="form-input px-3 py-1 rounded-md col-span-1"
            />
          </div>
          <div className="grid mt-4 grid-cols-2">
            <label className="col-span-1">Discription</label>
            <textarea
              name="discription"
              onChange={onInputData}
              rows={5}
              className="form-input px-3 py-1 txt rounded-md col-span-1"
            />
          </div>
          <div className="flex justify-between">
            <Link
              to="/"
              className="bg-gray-200 rounded text-black hover:bg-blue-500 hover:text-white px-2 py-1 text-sm mt-4"
            >
              Home
            </Link>
            <button
              className="bg-gray-200 rounded text-black hover:bg-blue-500 hover:text-white px-2 py-1 text-sm mt-4"
              onClick={onSubmit}
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
