import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmarks, handleReadingTime }) => {
  // the state -> blogs
  const [blogs, setBlogs] = useState([]);

  //   use effect-> fetch the data
  useEffect(() => {
    fetch("blogs-data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func,
};

export default Blogs;
