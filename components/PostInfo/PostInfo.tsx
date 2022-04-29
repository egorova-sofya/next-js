import Title from "../Title/Title";
import s from "./PostInfo.module.css";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};
  if (!post) {
    return <Title>emty post</Title>;
  }

  return (
    <div className={s.container}>
      <Title>{title}</Title>
      <p>{body}</p>
    </div>
  );
};

export default PostInfo;
