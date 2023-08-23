import BlogList from "./BlogList";
const Home = ({ blogs, deleteBlog, readBook, backgroundColor, readBtn, readedBooks }) => {
  return (
    <div className="content">
      <div className="home">
        <BlogList
          blogs={blogs.reverse()}
          title={"All My Books"}
          deleteBlog={deleteBlog}
          readBook={readBook}
          backgroundColor={backgroundColor}
          readBtn={readBtn}
          readedBooks={readedBooks}
        />
      </div>
    </div>
  );
};
export default Home;
