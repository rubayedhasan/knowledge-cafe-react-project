import Profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="w-10/12 md:w-4/5 mx-auto mt-10 md:mt-12 pb-8 border-b-2 md:border-b border-[#11111126] rounded-xs">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[#111111] text-2xl md:text-4xl">
          Knowledge Cafe
        </h1>

        {/* user profile */}
        <figure className="w-10 md:w-14 h-10 md:h-14 flex justify-between items-center cursor-pointer">
          <img
            src={Profile}
            alt="user profile"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </header>
  );
};

export default Header;
