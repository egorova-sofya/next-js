import React from "react";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>Contacts</div>
      <ul>
        {contacts &&
          contacts.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/contacts/${item.id}`}>
                  <a>
                    <b>{item.name}</b> {item.email}
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Contacts;
