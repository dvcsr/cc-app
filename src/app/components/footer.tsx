import { FC } from "react";
import Image from "next/image";
import logo from "../../assets/yl.svg";
import ig from "../../assets/ig.svg";

const MyFooter:FC = () => {return(

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

)}

export default MyFooter;