import { contactType } from "../../types";
import Title from "../Title/Title";
import { FC } from "react";
type contactInfoProps = {
  contact: contactType;
};

const ContactInfo: FC<contactInfoProps> = ({ contact }) => {
  const { name, email, address } = contact || {};
  if (!contact) {
    return <Title>emty contact</Title>;
  }

  return (
    <>
      <Title>{name}</Title>
      <p>{email}</p>
    </>
  );
};

export default ContactInfo;
