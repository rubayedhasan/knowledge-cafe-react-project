import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // the state -> set bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // the state -> set the reading time
  const [readingTime, setReadingTime] = useState(0);

  // function:: handle to add bookmarks item
  const handleAddToBookmarks = (bookmarkItem) => {
    const newBookmarks = [...bookmarks, bookmarkItem];
    setBookmarks(newBookmarks);
  };

  // function:: handler to get the reading time
  const handleReadingTime = (id, time) => {
    // set the reading time
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    // remove the bookmark item from bookmark list  after reading
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      {/* header section-> Component Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-10/12 md:w-4/5 mx-auto flex gap-8 mt-8">
        {/* blogs section -> Blogs Component  */}
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>

        {/* bookmark section -> Bookmarks Component  */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}

export default App;
