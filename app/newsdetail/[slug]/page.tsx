"use client";
import { useParams, useRouter } from "next/navigation";
import {
  useDeleteNewsMutation,
  useGetNewsQuery,
} from "@/Redux/features/services";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}
export default function page({ params }: Props) {
  const router = useRouter();
  const [deleteNews] = useDeleteNewsMutation();
  const { data, isLoading, error } = useGetNewsQuery();

  const news = data?.find((n) => n.id === (params.slug as string));

  const handleDelete = async () => {
    await deleteNews(params.slug as string).unwrap();
    router.push("/");
  };

  return (
    <div className=" mt-10 w-[70%] ml-52 border border-slate-200 p-5 rounded-md shadow-md">
      <div className="flex justify-between text-2xl bg-slate-300 mt-5 p-5 rounded-md text-black">
        <h1> {news?.title}</h1>
      </div>
      <div className="mt-5 mx-3 text-black">{news?.content}</div>

      <button
        className="px-4 py-2 ml-5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-5"
        onClick={() => router.push("/")}
      >
        Back
      </button>
    </div>
  );
}
