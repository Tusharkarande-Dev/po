import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="w-[58px] hidden  h-52 rounded-r absolute left-0 top-72 bg-slate-400/30 dark:bg-gray-300/30 lg:flex flex-col justify-evenly items-center">
      <Link
        className="hover-social text-zinc-950"
        href="https://github.com/Tusharkarande-Dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareGithub size={40} />
      </Link>
      <Link
        className="hover-social text-zinc-950"
        href="https://twitter.com/Tusharkarande_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareXTwitter size={40} />
      </Link>
      <Link
        className="hover-social text-zinc-950"
        href="https://www.linkedin.com/in/tushar-karande-4773a921b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={40} />
      </Link>
    </div>
  );
};

export default Social;
