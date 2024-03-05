import html from "../../public/html.png";
import css from "../../public/css.png"
import javascript from "../../public/js.png"
import react from "../../public/react.png"
import tailwind from "../../public/tailwind.png"
import next from "../../public/nextjs.png"
import node from "../../public/node.png"
import bootstrap from "../../public/bootstrap.png"
import postgresql from "../../public/postgresql.png"
import mongodb from "../../public/mongo.png"
import typescript from "../../public/typescript.png"
import express from "../../public/express.png"
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
