
import logo from "../../public/assets/images/logo.svg";
import menu from "../../public/assets/images/menu.svg";
import porsche from "../../public/assets/images/porsche.webp";

const Navbar = () => {
  return (
    <header className="w-full bg-white py-7 flex justify-between items-center px-10 max-sm:px-5">
      <nav className="flex w-full screen-max-width items-center">
        <div className="flex items-center">
          <img src={menu} className="h-6"/>
          <span className="text-black ml-2">Menu</span>
        </div>
        <div className="w-full max-sm:hidden">
            <img src={logo} className="h-3.5 mx-auto" />
        </div>
        <div className="w-full sm:hidden">
            <img src={porsche} className="h-10 mx-auto" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
