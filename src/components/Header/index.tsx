import Menu from "../Nav";

const Header = () => {
  return (
    <header className="w-full h-full">
    <div className="w-full h-[35px]  mx-auto flex items-center justify-around bg-[#336DFF]">
      <div className="">
        <h1 className="text-sm text-white opacity-100">
          ACESSORIA JURÍDICA | GUEDES BAMPI ADVOCACIA
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <img src="/Assets/Icons/insta.svg" className="w-4 h-4" />
        <img src="/Assets/Icons/x.svg" className="w-4 h-4" />
        <img src="/Assets/Icons/face.svg" className="w-4 h-4" />
      </div>
    </div>
    
    <Menu/>
    </header>
  );
};

export default Header;
