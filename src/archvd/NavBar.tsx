import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/yl.svg";

const NavBar: FC = () => {
  return(
    NavBarv1()
  )
}

const NavBarv1: FC = () => {
  return(
    <div className="flex-col shadow-md dark:text-white z-[999] rounded-full">
      {/* upper navbar */}
      <div className="py-2 bg-amber-200 bg-opacity-10 z-50 shadow-md">
        <div className="sm:flex sm:p-3 justify-between items-center">
        <a href="#" className="font-bold text-lg sm:text-2xl flex align-bottom text-amber-600">
          <Image src={logo} alt="company logo" className="w-10 animate-pulse"/><span className="text-5xl ml-[-0.3rem]">ellow</span>
        </a>
          <div className="container flex sm:justify-end items-end text-white">
          <Link href="/product" className="w-[100px] sm:w-[100px] hover:w-[120px] hover:bg-amber-200 transition-all duration-20 rounded-full border border-gray-300 px-2 py-1 focus:outline-none hover:text-amber-600 text-center">Product</Link>
          <Link href="/team" className="w-[100px] sm:w-[100px] hover:w-[120px] hover:bg-amber-300 transition-all duration-20 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-cyan-700 hover:text-amber-600 text-center">Team</Link>
          <Link href="/about" className="w-[100px] sm:w-[100px] hover:w-[120px] hover:bg-amber-400 transition-all duration-20 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-cyan-700 hover:text-amber-600 text-center">About</Link>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div>
      </div>
    </div>
  )
}

export default NavBar;
