import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="pt-2.5 w-1/3">
      {/* reading time Box */}
      <div className="py-5 bg-[#6047EC1A] border border-[#6047EC] rounded-lg">
        <h3 className="text-[#6047EC] text-2xl font-bold text-center">
          Spent time on read : 177 min
        </h3>
      </div>

      {/* section:: bookmark list  */}
      <div className="mt-6 p-7 rounded-lg bg-[#1111110D] min-h-40 lg:min-h-80">
        <h3 className="font-bold text-2xl text-[#111111]">
          Bookmarked Blogs : 8
        </h3>
        <div className="mt-4 space-y-4">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
};

export default Bookmarks;
