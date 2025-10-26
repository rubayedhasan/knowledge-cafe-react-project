import Profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="w-10/12 md:w-4/5 mx-auto mt-[5.7rem] pb-[3.64rem] border-b-[0.12rem] border-[#11111126] rounded-xs">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-[#111111] text-[4.55rem]">
          Knowledge Cafe
        </h1>

        {/* user profile */}
        <figure className="w-20 h-20 flex justify-between items-center cursor-pointer">
          <img
            src={Profile}
            alt="user profile"
            className="w-full h-full object-scale-downa"
          />
        </figure>
      </div>
    </header>
  );
};

export default Header;
