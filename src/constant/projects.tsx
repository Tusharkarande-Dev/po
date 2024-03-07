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
    desc: "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
    github_link: "https://github.com/Tusharkarande-Dev/portfolio_website",
    live_link: "https://tusharkarande.vercel.app",
    image: portfolio,
  }
];
