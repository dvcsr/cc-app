import { FC } from "react";
import Image from "next/image";
import logo from "../../assets/yl.svg";

const About:FC = () => {return(

  <div className="bg-[url('../../public/valer.jpg')] bg-cover min-h-screen h-svh overflow-hidden">
    <div className="sm:flex sm:items-center sm:justify-between py-5 rounded-full">
    <div className="flex justify-center md:flex-none md:justify-normal md:w-1/2 md:pl-20">
      {/* complogo */}
      <a href="/" className="font-bold text-lg sm:text-2xl flex align-bottom text-amber-600">
  <Image src={logo} alt="company logo" className="w-10 animate-pulse"/><span className="opacity-75 text-5xl ml-[-0.3rem]">3LLOW</span>
      </a>
    </div>
    <div className="md:w-1/2 sm:space-x-12 text-white">
  {/* three links */}
  <h2 className="w-screen text-start justify-center text-5xl xl:text-8xl font-sans pt-4 tracking-widest italic">
    OUR JOURNEY
    </h2>
    <h3 className="sm:w-[21rem] xl:w-screen sm:text-sm md:text-start md:justify-center text-xl xl:text-xl font-sans pt-4 tracking-widest xl:italic ">INNOVATION - ADVANCEMENT - PERFECTION</h3>
    </div>
    </div>
    <div className="text-white flex-col justify-between h-fit text-center text-sm pt-7">
    <div className="w-full flex justify-center">
    <p className="h-1/3 w-96 bg-gray-950 bg-opacity-60 font-bold rounded full p-2">
    In 2020, an unexpected partnership between Alex, a forward-thinking electrical engineer, and Sam, a visionary professional photographer, gave birth to a revolutionary idea. United by their shared fascination with light - its technical complexities and artistic potential - they embarked on an ambitious journey to redefine illumination. Merging Alex's expertise in ultra-efficient technology with Sam's intuitive understanding of perfect lighting, they set out to create lightbulbs that not only conserved energy but also enhanced the beauty of any space.
    </p>
    </div>
    <div className="w-full flex justify-center">
    <p className="h-1/3 w-96 bg-gray-950 bg-opacity-60 font-bold rounded full p-1">
    What started as passionate late-night brainstorming sessions in Alex's garage quickly evolved into the industry's fastest-growing venture. Their flagship product line, featuring abuse-resistant bulbs that incorporate the latest technology, has set new benchmarks for durability and performance. By seamlessly fusing cutting-edge engineering with artistic sensibility, this dynamic duo rapidly emerged as leaders in the lighting market.
    </p>
    </div>
    <div className="w-full flex justify-center">
    <p className="h-1/3 w-96 bg-gray-950 bg-opacity-60 font-bold rounded full p-0">
    Their innovative solutions now illuminate homes and businesses across the nation, showcasing the powerful synergy between technical precision and creative insight. As they continue to push the boundaries of lighting technology, Alex and Sam's commitment to excellence shines brightly, proving that when engineering ingenuity meets artistic vision, the results can truly light up the world.
    </p>
    </div>
    </div>
  </div>
)}

export default About;