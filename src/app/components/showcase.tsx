import { FC } from "react";
import Image from "next/image";
import logo1 from "../../assets/p7.jpg";
import logo2 from "../../assets/p2.jpg";
import logo3 from "../../assets/p3.jpg";
import logo4 from "../../assets/p4.jpg";
import logo5 from "../../assets/p5.jpg";
import logo6 from "../../assets/p6.jpg";
import ig from "../../assets/ig.svg";
import logo from "../../assets/yl.svg";


const Showcase:FC = () => {return(

  <div id="sec3" className="max-w-screen-lg h-fit max-h-screen mx-auto">
  <div className="flex justify-center items-center p-4 md:p-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="p-2 bg-yellow-300">
        <div className="h-56 w-56 flex justify-center items-center text-4xl text-amber-600 font-black">
          ALL
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center">
          <Image src={logo2} alt="" className="object-cover h-64 w-64" />
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center">
          <Image src={logo3} alt="" className="object-cover h-64 w-64" />
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center">
          <Image src={logo6} alt="" className="object-cover h-64 w-64" />
        </div>
      </div>
      <div className="p-2 bg-orange-300">
        <div className="h-56 w-56 flex justify-center items-center text-4xl font-black text-white">
          IS
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center">
          <Image src={logo1} alt="" className="object-cover h-64 w-64" />
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center">
          <Image src={logo4} alt="" className="object-cover h-64 w-64" />
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center">
          <Image src={logo5} alt="" className="object-cover h-64 w-64" />
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex justify-center items-center text-4xl">
        <a href="/#sec2" className="inline-block flex-col items-center justify-center text-center align-middle border-none">
      <span className="font-bold text-lg sm:text-2xl flex align-bottom text-amber-600">
  <Image src={logo} alt="company logo" className="w-10 animate-pulse"/><span className="opacity-100 text-5xl ml-[-0.3rem]">3LLOW</span>
      </span>
      <span className="inline-block tracking-tighter">contact us!</span><br />
      <span className="inline-block tracking-tighter text-xs">*click here*</span>
    </a>
        </div>
      </div>
    </div>
  </div>
  <footer className="row-start-2 flex gap-6 h-1/5 items-start justify-center pb-10">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us
          <Image
            aria-hidden
            src={ig}
            alt="icon"
            width={30}
            height={30}
            className="hover:animate-spin"
          />
        </a>
        <div className="flex items-center gap-2 " >
          <Image
            aria-hidden
            src={logo}
            alt="YL"
            width={30}
            height={30}
            className="hover:animate-spin"
          />
          Y3Llow Light Ltd © 2024 
        </div>
      </footer>
</div>
    
)}

export default Showcase;