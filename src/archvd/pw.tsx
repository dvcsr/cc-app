import { FC } from "react";
import Image from "next/image";
import fibre from "../assets/fibre.jpg";
import valer2 from "../assets/valer2.jpg";
import logo from "../assets/yl.svg";


const Pw: FC = () => {return(

    <div className="flex-col bg-opacity-90 justify-end">
      <Image src={valer2} alt="bg-valer" objectFit="cover" className="absolute"/>
      <p className="relative font-serif text-white text-lg xl:text-5xl align-middle justify-end py-7 lg:p-[14rem] pr-7">
      Hello <span className="font-bold text-lg text-sm md:text-2xl flex align-bottom text-amber-600">
          <Image src={logo} alt="company logo" className="w-4 md:w-10 animate-pulse"/>
          <span className="text-sm lg:text-5xl ml-[-0.3rem]">ellow</span></span><br />
      Created in 2020, our company has risen to the highest reputation for providing the best lightbulb in the industry
      </p>
        <div className="relative font-extrabold opacity-30 text-white text-lg xl:text-9xl flex align-middle justify-end md:p-[8rem] pr-7">
          8000+ companies</div>
      <div>
        <Card2/>
      </div>
      </div>
    

)}

const Card2: FC = () => {return(

  <div className="p-4 flex justify-evenly align-middle">
      <Image src={fibre} alt="fibre" className="rounded-lg shadow-xl w-60"/>
      <div className="flex-nowrap">
      <h1 className="mt-2 font-bold text-gray-900">World's <span className="italic underline underline-offset-4">thinnest</span> fibres</h1>
      <p className="mt-8 text-gray-600">
        Synthesized with the newest technology, the small fibres ensure superior efficiency<br/>
        Unlike traditional lightbulb, our energy consumption can be as low as 0.005 watts*
      </p>
      <div className="mt-4 ">
      <a href="#" className="inline-block bg-yellow-700 text-white px-7 py-1 rounded-2xl shadow-lg tracking-wider text-sm font-semibold">
        MORE</a>
      </div>
      </div>
      <Image src={fibre} alt="fibre" className="rounded-lg shadow-xl w-60"/>
      <h1 className="mt-2 font-bold text-gray-900">World's <span className="italic underline underline-offset-4">thinnest</span> fibres</h1>
      <p className="mt-8 text-gray-600">
        Synthesized with the newest technology, the small fibres ensure superior efficiency<br/>
        Unlike traditional lightbulb, our energy consumption can be as low as 0.005 watts*
      </p>
      <div className="mt-4 ">
      <a href="#" className="inline-block bg-yellow-700 text-white px-7 py-1 rounded-2xl shadow-lg tracking-wider text-sm font-semibold">MORE</a>
      </div>
      <Image src={fibre} alt="fibre" className="rounded-lg shadow-xl w-60"/>
      <h1 className="mt-2 font-bold text-gray-900">World's <span className="italic underline underline-offset-4">thinnest</span> fibres</h1>
      <p className="mt-8 text-gray-600">
        Synthesized with the newest technology, the small fibres ensure superior efficiency<br/>
        Unlike traditional lightbulb, our energy consumption can be as low as 0.005 watts*
      </p>
      <div className="mt-4 ">
      <a href="#" className="inline-block bg-yellow-700 text-white px-7 py-1 rounded-2xl shadow-lg tracking-wider text-sm font-semibold">MORE</a>
      </div>
    </div>
  

)}


export default Pw;