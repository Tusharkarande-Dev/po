import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constant/projects";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="flex flex-col w-full min-h-full lg:py-32 py-[100px] dark:text-gray-100 bg-gray-50 dark:bg-zinc-800  xl:px-40 px-4 lg:px-20 md:px-10"
    >
      <div className="flex flex-col  items-center text-center gap-5 lg:mb-24 mb-16">
        <h1 className="font-bold text-4xl lg:tracking-widest tracking-wider">
          PROJECTS
        </h1>
        <div className="h-1 w-8 rounded bg-violet-500"></div>
        <p className="md:text-xl lg:px-52 text-slate-600 dark:text-gray-300">
          Here you will find some of the personal projects that I created with
          skills I learned.
        </p>
      </div>
      <div className="flex flex-col lg:gap-28 md:gap-20 gap-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full h-full flex flex-col lg:flex-row items-center gap-10"
          >
            <div className="w-full">
              <Image
                src={project.image}
                className="w-full h-full"
                alt={project.project_name}
              />
            </div>
            <div className="lg:w-[65%] w-full">
              <div className="flex flex-col items-center lg:items-start gap-7">
                <h1 className="text-3xl font-bold tracking-wide">
                  {project.project_name}
                </h1>
                <p className="lg:text-start text-center md:text-lg text-zinc-600/80 dark:text-gray-300">{project.desc}</p>
                <div className="flex items-center gap-8">
                  <Link
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="py-2 px-10 tracking-wider text-lg rounded flex items-center ">
                      Github
                    </Button>
                  </Link>
                  <Link
                    href={project.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="py-2 px-12 tracking-wider text-lg rounded flex items-center gap-3">
                      Live
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
