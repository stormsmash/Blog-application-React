import { Link } from "react-router-dom";
import blogs from "../data/blogs";
import "./blogs.css";
import { useEffect, useState } from "react";
export default function Blogs() {
  const [search, setSearch] = useState("");
  const [filterBlog,setFilterBlog] = useState([])
useEffect(()=>{
//กรองข้อมูลบทความ
const result = blogs.filter((item)=>item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
setFilterBlog(result)
},[search])
  return (
    <>
      <div className="blogs-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="ค้นหาบทความ"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <article>
          {filterBlog.map((item) => (
            <Link to={`/blog/${item.id}`} key={item.id}>
              <div className="card">
                <h2>{item.title}</h2>
                <p>{item.content.substring(0, 300)}</p>
                <hr />
              </div>
            </Link>
          ))}
        </article>
      </div>
    </>
  );
}
