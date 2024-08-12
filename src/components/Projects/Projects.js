import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import Fhd from './fahadmotors.PNG'
import skillzin from './skillzin.PNG'
import foodWeb from './foodWeb.PNG'
import citymedical from './citymedical.PNG'
import MTAI2 from './MTAI2.PNG'
import ecom from './ecom.PNG'
export const projectsData = [
  {
    id: 5,
    thumbnail:
    MTAI2,
    title: "MTAI Software Lab",
    description:
      "Software company that Work with Web and App Technology",
    live: "https://mtai.live/",
    code: "https://github.com/AYOUB134/TEFTA",
    tech: ["React.js"],
    featured: false,
  },
  {
    id: 6,
    thumbnail:
    ecom,
    title: "E-comm Website",
    description:
      "E-comm Web From My learning Purpose",
    live: "flipkartweb-mern.vercel.app",
    code: "https://github.com/AYOUB134",
    tech: ["MERN Stack"],
    featured: false,
  },
  {
    id: 1,
    thumbnail: Fhd,
    title: "Fahad Motors ",
    description: "Manage All Customers, Dues of Customers, Total income, Expenses",
    live: "https://fahadmotors.vercel.app/",
    code: "https://github.com/AYOUB134/fahad-client",
    tech: ["MERN STACK"],
    featured: false,
  },
  {
    id: 2,
    thumbnail: skillzin,
    title: "SkillZen ",
    description:
      "Advance Freelancing Training Institute",
    live: "https://skillzenbuilder.vercel.app/",
    code: "https://github.com/AYOUB134/skillzenbuilder",
    tech: ["React.js"],
    featured: false,
  },
  {
    id: 3,
    thumbnail:
    foodWeb,
    title: "Food Web App ",
    description:
      "Order Your Food In a restaurant (its just App Responsive) ",
    live: "https://food-web-app-steel.vercel.app/",
    code: "https://github.com/AYOUB134/food-web-app",
    tech: ["React.js"],
    featured: false,
  },
  {
    id: 4,
    thumbnail:
    citymedical,
    title: "Hospital Patient Management System ",
    description:
      "Manage Ptient Detial ,Status (In, Out) , Bills , Income , Expenses",
    live: "https://citymedicaljatoi.vercel.app/home",
    code: "https://github.com/AYOUB134/city-client",
    tech: ["MERN Stack"],
    featured: false,
  },
 
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      <span>
        For More Projects and Other work visit my{" "}
        <a
          href="https://github.com/sheikhgit07"
          style={{ fontWeight: "bold", color: "red" }}
        >
          GitHub
        </a>
      </span>
    </Section>
  );
};

export default Projects;
