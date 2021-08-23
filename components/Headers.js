import Image from "next/image";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";

function Headers() {
  return (
    <header className="bg-[#0d0d0d] flex items-center justify-between text-[#a6a6a6] sticky top-0 z-50">
      <div className="flex items-center">
        <h1 className="inline-flex lg:hidden mx-4">MENU</h1>
        <span className="inline-flex lg:hidden mx-2">|</span>
        <div className="mt-2 mx-0 lg:mx-4">
          <Image
            className="object-contain"
            src="/logo.svg"
            width={200}
            height={50}
          />
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <h3 className="mr-1">GAMES</h3>
            <AiOutlineDown />
          </div>
          <div>
            <h3>STORE</h3>
          </div>
          <div>
            <h3>SUPPORT</h3>
          </div>
          <div className="flex items-center">
            <h3 className="mr-1">MORE</h3>
            <AiOutlineDown />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4 mx-4">
        <AiOutlineSearch className="hidden lg:inline-flex w-6 h-6" />
        <AiOutlineShoppingCart className="w-6 h-6" />
        <BsPersonFill className="w-6 h-6" />
      </div>
    </header>
  );
}

export default Headers;
