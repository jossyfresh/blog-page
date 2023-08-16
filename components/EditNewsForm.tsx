"use client";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

interface Props {
  title: string;
  content: string;
}

export default function EditNewsForm({ title, content }: Props) {
  const [news, setNews] = useState({
    title: title,
    content: content,
  });
  const router = useRouter();

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-center text-2xl mt-10">
        <h1>Edit News</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center mt-10"
        onSubmit={handlesubmit}
      >
        <div className="mb-6 w-[50%]">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Large input
          </label>
          <input
            type="text"
            value={news.title}
            onChange={(e) => setNews({ ...news, title: e.target.value })}
            placeholder="Enter title"
            className="block w-full p-4  border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <textarea
          className="w-[50%] border border-blue-300 rounded-md p-2 focus:border-none"
          rows={10}
          value={news.content}
          onChange={(e) => setNews({ ...news, content: e.target.value })}
          placeholder="Enter content"
        />
        <div className="flex gap-10">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5 mb-5"
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={(e) => router.push("/")}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5 mb-5"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
