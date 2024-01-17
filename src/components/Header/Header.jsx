import Image from "next/image";
import Logo from "../../assets/Svg/logo.svg";
import Button from "@/UI/Button/Button";
const Header = () => {
  return (
    <header className="h-[10vh] py-[24px]">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={Logo} alt="" />
          <div className="flex items-center gap-[57px]">
            <nav>
              <ul className="flex items-center gap-[36px]">
                <li className="jakarta text-[#04091E] font-medium leading-[150%] text-[18px] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:w-[0%] after:hover:w-[100%] after:duration-300 m-auto cursor-pointer">
                  About
                </li>
                <li className="jakarta text-[#04091E] font-medium leading-[150%] text-[18px] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:w-[0%] after:hover:w-[100%] after:duration-300 m-auto cursor-pointer">
                  Service
                </li>
                <li className="jakarta text-[#04091E] font-medium leading-[150%] text-[18px] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:w-[0%] after:hover:w-[100%] after:duration-300 m-auto cursor-pointer">
                  Blogs
                </li>
                <li className="jakarta text-[#04091E] font-medium leading-[150%] text-[18px] duration-300 flex hover:text-[#0B041B] flex-col after:content-[''] after:h-[2px] after:bg-gradient-to-r from-purple-500 to-pink-500 after:w-[0%] after:hover:w-[100%] after:duration-300 m-auto cursor-pointer">
                  FAQ
                </li>
              </ul>
            </nav>
            <Button text={"Contact Me"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
