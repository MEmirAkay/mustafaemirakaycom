import { Router, useRouter } from "next/router";
import { server } from "../../../config";

const article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>article _id: {id}</p>
      <p>author : {article.name}</p>
      <p>date : {article.date}</p>
      <p>title: {article.header} </p>
      <p>content : {article.content}</p>
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
