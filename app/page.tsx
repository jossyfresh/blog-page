"use client";
import Link from "next/link";
import { useGetNewsQuery } from "@/Redux/features/services";
import { data } from "autoprefixer";

export default function Home() {
  const { data, isLoading } = useGetNewsQuery();

  return (
    <div className=" mt-10 w-[70%] flex flex-col gap-10 flex-wrap ml-52 py-5 rounded-md">
      {data?.map((news) => (
        <Link href={`/newsdetail/${news.id}`}>
          <div
            key={news.id}
            className="flex justify-between text-xl border border-blue-500  h-32 items-center p-5 rounded-md hover:border-blue-700 hover:shadow-lg hover:shadow-sky-200"
          >
            <h1>{news.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
