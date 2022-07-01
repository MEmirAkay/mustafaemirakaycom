import { Router, useRouter } from "next/router";
import { server } from "../../../config";
import Head from "next/head";
import Link from "next/link";

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className=" bg-[#DDDDDD] w-full h-full scroll-smooth">
      <Head>
        <title>MEA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex h-auto p-2 align-top bg-[#222831] sticky top-0">
      <Link href="/" as={`/`}>
        <div className="border-2 rounded-full sm:w-14 sm:h-14 md:w-16 md:h-16  w-18 h-18  border-white items-center text-center flex justify-center hover:border-[#F05454] duration-150 p-2 ml-10">
        <img src="https://img.icons8.com/metro/40/DDDDDD/long-arrow-left.png"/>
        </div>
        </Link>
      </div>
      <div className="gap-4 grid-cols-1 grid-rows-2 md:w-7/12 w-10/12 py-10 align-top mx-auto duration-300">
        <div className="">
          <div className="pb-10">
            <img
              class="shadow-xl rounded-md mx-auto"
              src={article.pictureurl}
              alt="Man looking lifting kettlebell"
            />
          </div>
          <div className="grid-rows-3">
            <div>
              <h1 className="font-bold text-center text-3xl">
                {article.header}
              </h1>
            </div>
            <div className="grid-cols-2 grid-rows-1">
              <div>
                <b>Yazar:</b> {article.name}
              </div>
              <div>
                <b>Tarih:</b> {article.date}
              </div>
            </div>
            <div
              className="pt-5 text-justify"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`, {
    method: "GET",
  });
  try {
    const article = await res.json();
    return {
      props: {
        article,
      },
    };
  } catch (err) {
    console.log("Error: ", err.message);
    return err.message;
  }
};

export default article;
