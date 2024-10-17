import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/yl.svg";
import stars from "../../assets/5s.png"

const Header:FC = () => {return(

  <div className="bg-[url('../../public/lightbulb1.jpg')] bg-no-repeat bg-cover bg-center h-svh xl:h-[64rem] xl:bg-cover">
    <div className="sm:flex sm:items-center sm:justify-between py-5 shadow-lg rounded-full">
    <div className="flex justify-center md:flex-none md:justify-normal md:w-1/2 md:pl-20">
      {/* complogo */}
      <a href="#" className="font-bold text-lg sm:text-2xl flex align-bottom text-amber-600">
  <Image src={logo} alt="company logo" className="w-10 animate-pulse"/><span className="opacity-75 text-5xl ml-[-0.3rem]">3LLOW</span>
      </a>
    </div>
    <div className="bg-cover md:w-1/2 flex sm:space-x-12 justify-evenly text-white">
  {/* three links */}
  <div className="w-[100px] sm:w-[100px] hover:w-[120px] hover:bg-amber-200 transition-all duration-20 rounded-full border border-gray-300 px-2 py-1 focus:outline-none hover:text-amber-600 text-center">
      <Link href="/product">Product</Link>
  </div>
 <div className="w-[100px] sm:w-[100px] hover:w-[120px] hover:bg-amber-300 transition-all duration-20 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-cyan-700 hover:text-amber-600 text-center">
      <Link href="/team" >Team</Link>
 </div>
 <div className="w-[100px] sm:w-[100px] hover:w-[120px] hover:bg-amber-400 transition-all duration-20 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-cyan-700 hover:text-amber-600 text-center">
 <Link href="/about" >About</Link>
 </div>
    </div>
    </div>
    <div className="text-white h-4/6 flex-col xl:flex-row">
      {/* text in hero */}
      <div className="h-1/2 xl:h-px pl-3 pt-4 xl:pt-28">
        <h2 className="font-black tracking-widest italic w-1/3 md:text-xl xl:text-6xl xl:leading-relaxed">REVOLUTIONARY lightbulb like NEVER BEFORE</h2>
        <p className="w-1/3 pt-4 md:text-lg xl:text-xl">ultra-efficient, abuse-resistant lighting solution for your business</p>
      </div>
      <div className="flex h-1/2 xl:h-px pr-4 text-right xl:pt-14">
      <div className="content w-2/3">
      </div>
        <div className="w-1/3 -mt-12">
        <h2 className="font-black tracking-widest italic md:text-xl xl:text-6xl xl:leading-relaxed">TRUSTED by LEADERS in Southeast Asia</h2>
        <p className="text-start md:text-lg xl:text-xl"> 99% client satisfaction from the most recent Industrial Index Survey*</p>
        </div>
      </div>
    </div>
    <div className="text-white h-10 flex-col -mt-12 text-center xl:-mt-24">
      {/* testimonial */}
      <div className="flex justify-center xl:-ml-5">
        <Image src={stars} alt="stars" width={100}height={100}/>
      </div>
      <h2 className="italic font-black">THE SEXIEST LIGHTBULB IN THE INDUSTRY</h2>
      <h3 className="-mb-6 xl:mb-0">Ade, CEO TokopakAde</h3>
      <div className="flex align-top justify-center p-0 md:pb-10 mt-[2rem] xl:mt-[2rem] ml-[-2rem] z-[99] opacity-70"> 
            <a href="#sec2" className="bg-white bg-opacity-10 text-yellow-100 hover:text-yellow-400 text-xs md:text-lg xl:text-2xl rounded-full hover:font-extrabold py-2 px-4 light">
            LEARN MORE
            </a>
        </div>

    </div>
  </div>

)}

//1 div of bg contains 2 div: headbar + hero
    //headbar contains 2 div: companylogo + navbar
            // companylogo 1 div - navbar 3 link
      //hero contains

export default Header;