import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h2>Library</h2>
        <div className="links">
        <Link to="/">All Books</Link>
        <Link to="NewStory">Add Book</Link>
        </div>
      </nav>
      );
}
 
export default Navbar;