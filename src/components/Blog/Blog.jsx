import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover, author, author_img, reading_time, posted_date } = blog;

  return (
    <div className="mb-10">
      {/* blog cover picture */}
      <figure className="w-full ">
        <img
          src={cover}
          alt={`This cover related to title ${title}`}
          className="w-full object-contain rounded-lg"
        />
      </figure>

      {/* author & bookmarks information's  */}
      <div className="flex justify-between items-center mt-8">
        {/* sub-section:: author*/}
        <div className="flex gap-6 items-center">
          {/* author image  */}
          <figure className="w-14 h-14 flex justify-center items-center">
            <img
              src={author_img}
              alt={author}
              className="w-full object-contain"
            />
          </figure>

          {/* author  info*/}
          <div>
            <h4 className="font-bold text-[#111111] text-2xl">{author}</h4>
            <p className="font-semibold text-[#11111199] text-base">
              {posted_date}
            </p>
          </div>
        </div>

        {/* sub-section:: read & bookmarks  info*/}
        <div>
          <p>{reading_time} min read</p>
        </div>
      </div>

      {/* blog title  */}
      <h3 className="mt-6 text-4xl text-[#111111] font-bold">{title}</h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
