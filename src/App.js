import Navbar from "./Blog_Components/Navbar";
import Home from "./Blog_Components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import NewStory from "./Blog_Components/NewStory";
import { useState } from "react";

function App() {
  const [blogs, setBlogs] = useState([
    {
      title: "The Final battle",
      body: "lorem ipsum...",
      author: "Arun",
      date: "Jul 23",
      time: "12:45:14",
      id: 1,
    },
    {
      title: "Aventures of Blue Carbuncle !",
      body: "lorem ipsum...",
      author: "Ganesh",
      date: "Jul 27",
      time: "02:28:34",
      id: 2,
    },
    {
      title: "Hounds of Baskerville",
      body: "lorem ipsum...",
      author: "Saran",
      date: "Jul 29",
      time: "06:35:39",
      id: 3,
    },
  ]);

  blogs.reverse();
  const deleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [readBtn, setReadBtn] = useState(true);
  const navigate = useNavigate();

  function handleAdd(event) {
    event.preventDefault();
    blogs.unshift({
      id: blogs.length + 1,
      title,
      author,
      time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      date: `${new Date().toString().split(" ")[1]} ${new Date().getDate()}`,
      body: "lorem ipsum...",
    });
    navigate("/");
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              blogs={blogs}
              deleteBlog={deleteBlog}
              readBtn={readBtn}
            />
          }
        />
        <Route
          path="Newstory"
          element={
            <NewStory
              setAuthor={setAuthor}
              setTitle={setTitle}
              handleAdd={handleAdd}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
