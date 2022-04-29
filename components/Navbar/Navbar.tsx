import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Home from "../../pages";
import Image from "next/dist/client/image";

const navigation = [
  { id: 1, title: "home", path: "/" },
  { id: 2, title: "posts", path: "/posts" },
  { id: 3, title: "contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div>
        <Image src="/vercel.svg" width={50} height={20} alt="logo image" />
      </div>

      <nav>
        <ul>
          {navigation.map((item) => {
            return (
              <li key={item.id}>
                <Link href={item.path}>
                  <a
                    style={
                      pathname === item.path
                        ? { textDecoration: "underline" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
