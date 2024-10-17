import { FC } from "react";
import Image from "next/image";
import logo from "../../assets/yl.svg";

const MyOverview:FC = () => {return(

  <div id="sec2" className="bg-valer2 bg-no-repeat bg-cover min-h-screen h-svh xl:bg-cover">
    <div className="sm:flex sm:items-center sm:justify-between py -10 -mb-3 pt-20">
    <div className="flex justify-center align-middle md:w-full md:pl-20 pt-0">
      <h1 className="font-mono tracking-widest font-bold text-lg lg:text-7xl flex align-text- text-amber-600">
  <span className="opacity-30 text-white pl-2 mr-1">Hello</span><Image src={logo} alt="company logo" className="animate-pulse w-8 lg:w-14 -mt-2"/>
  <span className="opacity-35 ml-[-0.1rem] lg: ml-[-0.3rem]">3LLOW</span>
      </h1>
    </div>
    </div>
    <div className="text-white h-4/6 flex-col xl:flex-row xl:text-center lg:-mb-40 xl:-mt-12">
      {/* company history */}
      <div className="xl:h-px pl-3 pt-4">
        <p className="w-1/3 lg:w-full md:text-lg xl:text-2xl text-pretty opacity-50 xl:pt-20 bg-gray-100 bg-clip-text italic">Created in 2020, within just 5 years our company has risen to the highest reputation for providing the best lightbulb in the industry</p>
      </div>
    </div>
    <div className="h-2/6 text-white h-10 flex-col text-center tracking-widest h-fit w-fit pt-10 xl:p-0">
      {/* bottom */}
      <h2 className="h-1/2 w-screen italic font-black text-4xl xl:text-9xl opacity-70 -m-5 flex items-center justify-center xl:justify-end pt-0">+8000 clients</h2>
      <div className="flex align-top justify-center lg:pt-20 opacity-70 pt-10"> 
            <a href="#" className="bg-white bg-opacity-10 text-yellow-100 hover:text-yellow-400 text-xs md:text-lg xl:text-2xl rounded-full hover:font-extrabold py-2 px-4 light">
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

export default MyOverview;