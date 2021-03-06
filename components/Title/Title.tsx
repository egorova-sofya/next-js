const Title = ({ tag, children }) => {
  const Tag = tag || "h1";
  return <Tag>{children}</Tag>;
};

export default Title;
