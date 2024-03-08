import { skills } from "@/constant/skills";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const About = (): JSX.Element => {
  return (
    <article id="about" className="flex flex-col w-full min-h-full lg:py-32 py-[100px] dark:text-gray-100 bg-gray-100 dark:bg-zinc-700 xl:px-40 px-4 lg:px-20 md:px-10">
      <figure className="flex flex-col  items-center text-center gap-5 lg:mb-24 mb-16">
        <h1 className="font-bold text-4xl lg:tracking-widest tracking-wider">
          ABOUT ME
        </h1>
        <div className="h-1 w-8 rounded bg-violet-500"></div>
        <p className="md:text-xl lg:px-52 text-slate-600 dark:text-gray-300">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </figure>
      <figure className="grid lg:grid-cols-2 lg:gap-28 gap-20">
        <div className="flex flex-col lg:items-start items-center gap-8">
          <h1 className="lg:text-3xl text-2xl font-bold">Get to know me!</h1>
          <div className="md:text-lg  lg:text-start flex flex-col gap-3 text-center text-zinc-600/80 dark:text-gray-300">
            <p>As an aspiring Full Stack Developer, I am enthusiastic about delving
            into the dynamic world of web development, eager to contribute my
            skills to building captivating Websites and Web Applications. While
            I may lack extensive industry experience, I make up for it with a
            strong foundation in frontend and backend technologies, coupled with
            a passion for learning and growing in this field.
            </p>
            <p>
            Take a moment to explore some of the projects I&apos;ve worked on in
            the Projects section below. I am actively seeking opportunities
            where I can apply my knowledge, collaborate with talented teams, and
            embark on a journey of continuous learning and development. If you
            have an opportunity that welcomes fresh perspectives and offers
            mentorship, I would love to hear from you.
            </p>
          </div>
          <Link href="#contact">
          <Button className="py-4 px-14 rounded-md">Contact</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-9 items-center lg:items-start">
          <h1 className="lg:text-3xl text-2xl font-bold ml-4">My Skills</h1>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
            {skills.map((skill) => (
              <div className="flex flex-col items-center gap-1" key={skill.id}>
                <Image
                  className="size-12"
                  src={skill.img}
                  alt={skill.lang}
                />
                <span className="font-semibold ">{skill.lang}</span>
              </div>
            ))}
          </div>
        </div>
      </figure>
    </article>
  );
};

export default About;
