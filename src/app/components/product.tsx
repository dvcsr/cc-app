import { FC } from "react";
import Image from "next/image";;
import logo from "../../assets/yl.svg";



const Product:FC = () => {return(


  <div id="sec3" className="max-w-screen-lg h-fit max-h-screen mx-auto">
            <div className="sm:flex sm:items-center sm:justify-center py-5 shadow-lg rounded-full bg-yellow-100">
      <p className="font-sans text-5xl tracking-widest flex justify-center text-center">BUSINESS COVERAGE</p>
    </div>
  <div className="flex justify-center items-center p-4 md:p-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* start of grid cols 3 */}
      <div className="p-2 from-slate-5 bg-gradient-to-r from-amber-90 to-gray-300 to-90% rounded-br-[150px] flex justify-center">
        <div className="h-56 w-56 flex justify-center items-center text-xl font-black">
          <span className="text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-300">PLATINUM $19,999
            <p className="text-sm text-orange-400">notable clients: TokopakAde, PurwaDeeka</p>
          </span>
        </div>
      </div>
      <div className="flex-col justify-center p-2">
        <div className="h-56 w-56 flex-col justify-center items-center">
        <p className="text-center h-fit w-fit pt-8">
            Platinum features:</p>
            <ul className="text-start">
              <li>• Latest technology of lightbulb</li>
              <li>• Guaranteed premium bulblight</li>
              <li>• 24/7 Customer service</li>
              <li>• Full specialized engineer support</li>
              <li>• Full year protection</li>
            </ul>
        </div>
      </div>
      <div className="flex justify-center p-2 from-slate-5 bg-gradient-to-r from-amber-90 to-gray-300 to-90% rounded-br-[150px]">
        <div className="h-56 w-60 flex justify-center items-center text-6xl font-black">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-stone-400 to-95%">SILVER $9999
          <p className="text-sm text-orange-400">notable clients: PERURY, HaloDEK</p>
          </span>
        </div>
      </div>
      <div className="p-2">
        <div className="h-56 w-56 flex-col justify-center items-center">
          <p className="text-center h-fit w-fit pt-8">
            Silver features: </p>
            <ul className="text-start">
            <li>• Latest technology of lightbulb</li>
              <li>• Full year protection</li>
              <li>• Guaranteed premium bulblight</li>
              <li>• 24/7 Customer service</li>
              <li>• Full specialized engineer support</li>
            </ul>
        </div>
      </div>
      <div className=" sm:w-[50rem] xl:w-[50rem]">
      <div className="flex justify-center">
        <div className="flex justify-center items-center text-4xl">
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
  </div>
</div>
    
)}

export default Product;