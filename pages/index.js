import Head from "next/head";
import Link from "next/link";
import { server } from "../config";

export default function Home({ data }) {
  return (
    <div className=" bg-[#DDDDDD] w-full h-full scroll-smooth">
      <Head>
        <title>Mustafa Emir Akay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="bg-[#DDDDDD] w-full h-full">
        <div className="w-full flex h-60 align-top bg-[#222831] items-center mx-auto">
          <div className="mx-auto grid-row-3 grid-col-1 gap-x-5 grid">
            <div className="flex text-3xl text-white text-center align-middle justify-center">
              Merhaba ben Emir,
              <img
                className="mx-2"
                src="https://user-images.githubusercontent.com/42378118/110234147-e3259600-7f4e-11eb-95be-0c4047144dea.gif"
                width="40"
              ></img>
            </div>
            <div className="flex font-light text-center align-middle justify-center text-white text-2xl">
              Burada yazılım, spor ve felsefe gibi farklı konularda bildiklerimi
              ve deneyimlerimi paylaşıyorum.
            </div>
            <div className="flex font-light text-center align-middle justify-center text-white text-2xl grid-rows-1 grid-cols-4 gap-6 pt-6">
              <div className="border-2 rounded-full w-16 h-16 border-white items-center text-center flex justify-center hover:border-[#F05454] duration-150">
                <a href="https://github.com/MEmirAkay" target="_blank">
                  <img src="https://img.icons8.com/ios-glyphs/50/DDDDDD/github.png" />
                </a>
              </div>
              <div className="border-2 rounded-full w-16 h-16 border-white items-center text-center flex justify-center hover:border-[#F05454] duration-150">
                <a
                  href="https://www.linkedin.com/in/mustafaemirakay/"
                  target="_blank"
                >
                  <img src="https://img.icons8.com/windows/50/DDDDDD/linkedin.png" />
                </a>
              </div>
              <div className="border-2 rounded-full w-16 h-16 border-white items-center text-center flex justify-center hover:border-[#F05454] duration-150">
                <a href="https://www.instagram.com/emirakay99/" target="_blank">
                  <img src="https://img.icons8.com/ios/40/DDDDDD/instagram-new--v1.png" />
                </a>
              </div>
              <div className="border-2 rounded-full w-16 h-16 border-white items-center text-center flex justify-center hover:border-[#F05454]  duration-150">
                <a href="mailto:emirakay073@gmail.com" target="_blank">
                  <img src="https://img.icons8.com/material-outlined/40/DDDDDD/new-post.png" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="content" className="xl:w-8/12 lg:w-9/12 w-10/12 py-10 h-auto align-top mx-auto duration-300  ">
          {/* Content List Starts */}
          {data &&
            data.map((e) => (
              <Link href="/article/[id]" as={`/article/${e._id}`}>
                <div className="hover:shadow-2xl shadow-xl grid-cols-2 m-5 flex text-[#30475E] font-light md:text-2xl text-sm border-2 rounded-3xl border-[#30475E] hover:border-[#F05454] hover:text-[#F05454] duration-300">
                  <div id="image" className="p-5 lg:block hidden duration-300 ">
                    <img
                      className="rounded-lg shadow-xl max-w-[300px] max-h-[200px] w-[500px] md:h-[200px] object-fit"
                      src={e.pictureurl}
                    ></img>
                  </div>
                  <div className="grid-rows-3 p-5">
                    <div className="text-2xl md:font-semibold font-normal">
                      {e.header}
                    </div>
                    <div className=" md:text-xl text-base " dangerouslySetInnerHTML={{__html: e.content.substring(0, 200)+"..."}}></div>
                    <div className="text-base">{e.date}</div>
                  </div>
                </div>
              </Link>
            ))}
          {/* Content List Ends */}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/api/hello`, {
    method: "GET",
  });
  try {
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log("Error: ", err.message);
    return err.message;
  }
}
