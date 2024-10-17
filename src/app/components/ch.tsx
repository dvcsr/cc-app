import { FC } from "react";
import Image from "next/image";
import logo from "../../assets/yl.svg"

const MyOverview2:FC = () => {return(
  <div id="sec2" className="bg-valer2 bg-no-repeat bg-cover text-white h-lvh xl:h-[64rem]">
    <div className="h-svh flex-col">
    <div className=" h-1/2 flex-row items-center w-fit xl:pt-20">
    <h1 className="h-1/2 flex items-end xl:justify-center px-10 py-5 font-bold text-2xl md:text-3xl xl:text-6xl xl:text-center font-mono italic opacity-80 tracking-widest">
      hello <div className="flex align-bottom text-amber-600 items-center">
  <Image src={logo} alt="company logo" className="opacity-100 w-10 animate-pulse"/><span className="not-italic -ml-1t">3LLOW</span>
      </div>  
      </h1>
      <h3 className="bg-gray-500 bg-opacity-10 italic opacity-50 p-3 md:text-3xl xl:text-5xl xl:pt-10">
        Created in 2020, within just 5 years our company has risen to the highest reputation for providing the best lightbulb in the industry</h3>
    </div>
    <div className="flex-col items-end">
    <div className="h-1/2 px-4 md:pb-10 mt-[2rem] xl:mt-[2rem] z-[99] opacity-70"> 
            <a href="#sec3" className="h-full bg-white bg-opacity-10 text-yellow-100 hover:text-yellow-400 text-xs md:text-lg xl:text-2xl rounded-full hover:font-extrabold py-2 px-4 light">
            LEARN MORE
            </a>
        </div>
      <h3 className="bg-red-200 h-1/2 p-5 pt-10 text-4xl opacity-20"
      >8000+ companies</h3>
    </div>
    </div>
  </div>
)}

const Ov1 = () => {return(

  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
)}

export default MyOverview2;