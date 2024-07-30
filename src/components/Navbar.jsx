import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
// import { navLinks } from "../constants/constants";
import { logo, menu, close, customLogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("")

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to='/'
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0,0)
          }}
        >
          <img src={customLogo} alt="logo" className="w-2.5 h-2.5 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Andrew Nguyen</p>
        </Link>
        <p className="text-green-500">test</p>
      </div>
    </nav>
  );
};

export default Navbar;
