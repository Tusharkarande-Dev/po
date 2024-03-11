import { StaticImageData } from "next/image";
import portfolio from "../../public/projects-images/portfolio_bg.png";

interface ProjectsProp {
  id: number;
  project_name: string;
  desc: string;
  github_link: string;
  live_link: string;
  image: StaticImageData;
}

export const projects: ProjectsProp[] = [
  {
    id: 1,
    project_name: "Portfolio",
    desc: "My portfolio website is a testament to my skills in web development, design, and content creation.Through this project, I demonstrate my ability to blend creativity with technical expertise to create impactful digital experiences.",
    github_link: "https://github.com/Tusharkarande-Dev/portfolio_website",
    live_link: "https://tusharkarande.vercel.app",
    image: portfolio,
  }
];
