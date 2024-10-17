import {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroBanner from "../assets/lightbulb1.jpg";

const Hero:FC = () => {return(
  Herov2()
)}

const Herov2: FC = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-[99] opacity-90 h-[24rem] bg-auto">
          <Image src={HeroBanner} alt="the-light" placeholder="blur" fill={true} objectFit="cover" className='z-0'/>
        </div>
        <section className="bg-primary text-white sm:py-[2rem] relative mb-[-3.8rem]">
        <div className='sm:flex sm:bg-inherit justify-between sm:items-stretch'>
        <div className="container -mb-10 -p-10 text-start relative xl:p-4 z-0">
          <h1 className="text-sm md:text-xl xl:text-4xl font-bold mb-4 tracking-widest">Illuminating Your World</h1>
          <p className="text-xs md:text-lg xl:text-xl mb-8">Innovative and ultra-efficient lighting solutions for your business</p>
        </div>
        <div className="container mx-auto text-start relative z-0 p-4 text-end">
          <h1 className="text-sm md:text-xl xl:text-4xl font-bold mb-4 tracking-widest">Leader in Southeast Asia</h1>
          <p className="text-xs md:text-lg xl:text-xl mb-8">From the most recent Industrial Index Survey*</p>
        </div>
        </div>
        <div className="flex align-top justify-center items-center p-0 md:pb-10 mt-[2rem] xl:mt-[2rem] ml-[-2rem] z-[99] opacity-70"> 
        <Link href="/product" className="bg-white bg-opacity-10 text-yellow-100 hover:text-yellow-400 text-xs md:text-lg xl:text-2xl rounded-full hover:font-extrabold py-2 px-4 rounded textshadow">
            LEARN MORE
          </Link>
        </div>
      </section>
      </div>
  )}

  export default Hero;

