import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover } = blog;

  return (
    <div>
      {/* blog cover picture */}
      <figure>
        <img src={cover} alt={`This cover related to title ${title}`} />
      </figure>

      {/* blog title  */}
      <h3>{title}</h3>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
