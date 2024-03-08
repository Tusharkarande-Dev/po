import Link from "next/link"
import Button from "./Button"
import Social from "./Social"

const Hero = () => {
  return (
    <div id="home" className="w-full lg:h-full h-[65%] md:h-[80%]  text-center flex items-center justify-center px-4 md:px-8">
      <Social />
      <div className="flex flex-col items-center gap-6 lg:gap-10 lg:-mt-20 ">
        <h1 className="font-black lg:text-6xl md:text-[3.5rem] text-4xl text-color tracking-wider leading-normal">HEY, I&apos;M TUSHAR KARANDE</h1>
        <p className="text-lg lg:text-[1.35rem] md:text-xl max-w-[750px] text-color">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
        <Link href="#projects">
        <Button className="py-3.5 lg:py-4 rounded-md tracking-wider mt-6 lg:px-20 px-[68px] text-xl text-gray-100">Projects</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero