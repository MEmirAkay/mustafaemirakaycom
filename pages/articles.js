import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Articles() {
  const [data, setData] = useState("");

  async function fetchData() {
    await fetch("/api/hello", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        
        setData(responseJson);
      });
  }

  useEffect(()=>{
    fetchData();
  }, []);
  

  return (
    <div className="flex flex-col w-full h-screen">
      <Head>
        <title>MEA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <a href="./">
        <button className="border bg-red-600 text-white w-80 rounded-md p-3 shadow-lg hover:shadow-2xl duration-500">
          Home
        </button>
      </a>
    
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full h-full">
        {data &&
          data.map((e) => (
            <Link href="/article/[id]" as={`/article/${e._id}`}>
            <div className="inline-grid grid-cols-1 grid-rows-3 rounded-xl shadow-md overflow-hidden m-3 hover:shadow-2xl duration-500">
              <div>
                <div className="h-20 md:h-36 text-center ">
                  <img
                    class="h-20 w-full object-cover md:h-36"
                    src={e.pictureurl}
                    alt="Man looking lifting kettlebell"
                  />
                </div>
                <div className="p-2">
                  <div className=" text-center">{e.header}</div>
                  <div className="invisible md:visible duration-100">
                    {e.content.substring(3, 150)}...
                  </div>
                  <div className="invisible md:visible duration-100">
                    Date: {e.date}
                  </div>
                  <div className="invisible md:visible duration-100">
                    Author: {e.name}
                  </div>
                </div>
              </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}