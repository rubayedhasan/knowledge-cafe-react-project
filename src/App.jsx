import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* header section-> Component Header  */}
      <Header></Header>

      {/* main section  */}
      <main className="w-10/12 md:w-4/5 mx-auto flex gap-[2.73rem] mt-[3.64rem]">
        {/* blogs section -> Blogs Component  */}
        <Blogs></Blogs>

        {/* bookmark section -> Bookmarks Component  */}
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App;
