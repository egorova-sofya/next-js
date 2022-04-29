import Head from "next/head";
import PostInfo from "../../components/PostInfo/PostInfo";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import { NextPage } from "next";
import { Post } from "../../types";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};

const Post: NextPage<Post> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
