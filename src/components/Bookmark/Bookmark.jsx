import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-white rounded-lg p-5">
      <h3 className="font-semibold text-lg text-[#111111]">{bookmark.title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default Bookmark;
