import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import s from "./Posts.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div className={s.container}>Posts</div>
      <ul>
        {posts &&
          posts.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/posts/${item.id}`}>
                  <a>
                    <b>{item.title}</b>
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Posts;
