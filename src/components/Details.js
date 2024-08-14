import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import "./Details.css";
export default function Details() {
  const { id } = useParams();
  const [title, setIitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    //ดึงบทความ
    const result = blogs.find((item) => item.id === parseInt(id));
    setIitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <h2 className="title">บทความ : {title}</h2>
      <img src={image} alt={title} className="blog-img" />
      <div className="blog-detail">
        <strong>ผู้เขียน : {author}</strong>
        <p>{content}</p>
      </div>
    </div>
  );
}
