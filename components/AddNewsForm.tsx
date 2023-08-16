"use client";
import React from "react";
import { useState } from "react";
import { useCreateNewsMutation } from "@/Redux/features/services";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { title } from "process";

export default function AddNewsForm() {
  const [news, setNews] = useState({
    title: "",
    content: "",
  });
  const router = useRouter();
  const [createNews, { isLoading }] = useCreateNewsMutation();

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await createNews(news).unwrap();
    console.log(data);
    router.push("/");
  };

  return (
    <div>
      <div className="flex justify-center text-2xl mt-10">
        <h1>Add New NEWS</h1>
      </div>
      <form
        className="flex flex-col justify-center items-center mt-10"
        onSubmit={handlesubmit}
      >
        <div className="mb-6 w-[50%]">
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
