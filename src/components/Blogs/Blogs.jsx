import { useEffect, useState } from "react";

const Blogs = () => {
  // the state -> blogs
  const [blogs, setBlogs] = useState([]);

  //   use effect-> fetch the data
  useEffect(() => {
    fetch("blogs-data.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className=" border w-2/3">
      <h2>I'm from blogs</h2>
    </div>
  );
};

export default Blogs;
