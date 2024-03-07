import html from "../../public/languages/html.png";
import css from "../../public/languages/css.png"
import javascript from "../../public/languages/js.png"
import react from "../../public/languages/react.png"
import tailwind from "../../public/languages/tailwind.png"
import next from "../../public/languages/nextjs.png"
import node from "../../public/languages/node.png"
import bootstrap from "../../public/languages/bootstrap.png"
import postgresql from "../../public/languages/postgresql.png"
import mongodb from "../../public/languages/mongo.png"
import typescript from "../../public/languages/typescript.png"
import express from "../../public/languages/express.png"
import { StaticImageData } from "next/image";

// Define a type for a skill object
type Skill = {
  id: number;
  lang: string;
  img: StaticImageData;
};

// Define the array of skill objects
export const skills: Skill[] = [
  {
    id: 1,
    lang: "HTML",
    img: html,
  },
  {
    id: 2,
    lang: "CSS",
    img: css
  },
  {
    id: 3,
    lang: "Javascript",
    img: javascript
  },
  {
    id: 4,
    lang: "Typescript",
    img: typescript
  },
  {
    id: 5,
    lang: "React",
    img: react
  },
  {
    id: 6,
    lang: "Tailwind",
    img: tailwind
  },
  {
    id: 7,
    lang: "Nextjs",
    img: next
  },
  {
    id: 8,
    lang: "Nodejs",
    img: node
  },
  {
    id: 9,
    lang: "Expressjs",
    img: express
  },
  {
    id: 10,
    lang: "Bootstrap",
    img: bootstrap
  },
  {
    id: 11,
    lang: "MongoDB",
    img: mongodb
  },
  {
    id: 12,
    lang: "PostgreSQL",
    img: postgresql
  }
];
