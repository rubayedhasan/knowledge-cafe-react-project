import PropTypes from "prop-types";
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmarks, handleReadingTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="mb-8 md:mb-10 pb-6 md:pb-9 px-2.5 pt-2.5 shadow-xs border-b-4 md:border-b border-[#1111111A] rounded-xs">
      {/* blog cover picture */}
      <figure className="w-full ">
        <img
          src={cover}
          alt={`This cover related to title ${title}`}
          className="w-full object-contain rounded-lg"
        />
      </figure>

      {/* author & bookmarks information's  */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 mt-5 md:mt-8">
        {/* sub-section:: author*/}
        <div className="flex gap-4 md:gap-6 items-center">
          {/* author image  */}
          <figure className="w-10 md:w-14 h-10 md:h-14 flex  justify-center items-center">
            <img
              src={author_img}
              alt={author}
              className="w-full object-contain"
            />
          </figure>

          {/* author  info*/}
          <div>
            <h4 className="font-bold text-[#111111] text-lg md:text-2xl">
              {author}
            </h4>
            <p className="font-semibold text-[#11111199] text-sm md:text-base">
              {posted_date}
            </p>
          </div>
        </div>

        {/* sub-section:: read & bookmarks  info*/}
        <div className="flex gap-6">
          <p className="font-medium text-lg md:text-xl text-[#11111199]">
            {reading_time} min read
          </p>
          {/* bookmark button  */}
          <button
            onClick={() => handleAddToBookmarks(blog)}
            className="text-lg md:text-xl cursor-pointer hover:text-rose-400"
            type="button"
          >
            <IoBookmarksOutline />
          </button>
        </div>
      </div>

      {/* blog title  */}
      <h3 className="mt-6 text-2xl md:text-4xl text-[#111111] font-bold md:w-4/5">
        {title}
      </h3>

      {/* hash tags  */}
      <p className="flex flex-wrap gap-1.5 mt-4 font-medium text-Base md:text-xl text-[#11111199]">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="mr-2.5 md:mr-3.5">
            {hash}
          </span>
        ))}
      </p>

      {/* mark as read button  */}
      <button
        onClick={() => handleReadingTime(id, reading_time)}
        className="font-semibold text-lg md:text-xl text-[#6047EC] mt-3.5 md:mt-5 underline underline-offset-2 cursor-pointer"
        type="button"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func,
};

export default Blog;
