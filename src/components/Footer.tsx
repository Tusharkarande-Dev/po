import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="xl:px-40 px-4 lg:px-20 md:px-10 pb-10 dark:text-gray-100 dark:bg-zinc-800">
      <div className="flex flex-col px-8">
        <div className="flex md:justify-between md:flex-row flex-col-reverse gap-10 md:py-20 py-16">
          <div className="flex flex-col md:gap-5 gap-3  justify-center">
            <h1 className="font-bold md:text-2xl text-xl uppercase">Tushar Karande</h1>
            <p className="max-w-[500px] md:text-[0.925rem] text-sm">
              A FullStack focused Web Developer building the Frontend and
              Backend of Websites and Web Applications that leads to the success
              of the overall product
            </p>
          </div>
          <div className="flex flex-col md:gap-5 gap-3 justify-center">
            <h1 className="font-bold text-2xl uppercase">Social</h1>
            <div className="flex justify-start gap-3">
              <Link
                className="hover-text"
                href="https://github.com/Tusharkarande-Dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGithub size={30} />
              </Link>
              <Link
                className="hover-text"
                href="https://twitter.com/Tusharkarande_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareXTwitter size={30} />
              </Link>
              <Link
                className="hover-text"
                href="https://www.linkedin.com/in/tushar-karande-4773a921b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-zinc-700"></div>
        <div className="text-center text-xs mt-10">© Copyright 2024 . Made by <Link className="hover:underline uppercase hover-text font-semibold" href="https://tusharkarande.vercel.app/">Tushar Karande</Link></div>
      </div>
    </footer>
  );
};

export default Footer;
