import React from "react";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <Title>Header</Title>
      <Navbar />
    </header>
  );
};

export default Header;
