import { useState } from "react";

const BlogList = ({ blogs, title, deleteBlog }) => {
  const [toggle, setToggle] = useState([]);
  const [readedBooks, setReadedBooks] = useState(0);

  function readBook(index) {
    if (!toggle.includes(index)) {
      setToggle([...toggle, index]);
    }
    setReadedBooks(readedBooks + 1);
  }
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <h6>Total Books - {blogs.length}</h6>
      <h6>Readed Books - {readedBooks}</h6>
      {blogs.map((blog, index) => (
        <div
          className="blog-preview"
          style={{ backgroundColor: toggle.includes(index) ? "green" : "red" }}
          key={blog.id}
        >
          <h2>{blog.title}</h2>
          <p>{"Author is " + blog.author}</p>
          <p>{"Date : " + blog.date}</p>
          <p>{"Time : " + blog.time}</p>
          <button className="button" onClick={() => deleteBlog(blog.id)}>
            Delete
          </button>
          {!toggle.includes(index) ? (
            <button onClick={() => readBook(index)} className="button">
              Mark as Read
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
