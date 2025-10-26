import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // the state -> set bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // function:: handle to add bookmarks item
  const handleAddToBookmarks = (bookmarkItem) => {
    const newBookmarks = [...bookmarks, bookmarkItem];
    setBookmarks(newBookmarks);
  };
  console.log(bookmarks);

  return (
    <>
      {/* header section-> Component Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-10/12 md:w-4/5 mx-auto flex gap-8 mt-8">
        {/* blogs section -> Blogs Component  */}
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>

        {/* bookmark section -> Bookmarks Component  */}
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
