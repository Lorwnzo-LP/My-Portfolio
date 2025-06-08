import HeaderComponent from "../../components/HeaderComponent";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  Description,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import myPhoto from "/src/assets/minha_foto_square.png";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../projects";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [chosen, setChosen] = useState();

  const handleChose = (project) => {
    setChosen({
      name: project.name,
      image: project.image,
      languages: project.programming,
      descriptionText: project.descriptionText,
      favorite: project.favorite,
      link: project.link,
      finished: project.finished,
    });

    console.log(chosen);
  };



  return (
    <>
      <section className="flex flex-col gap-10 mt-10">
        <div className="flex lg:flex-row flex-col gap-10 w-8/10 place-self-center justify-between">
          <div className=" place-self-center gap-10 flex">
            <img
              className="rounded-4xl w-70 top-1 border-4 border-purple-900"
              src={myPhoto}
              alt="Minha foto"
            />

            <div className="flex flex-col place-content-center gap-10">
              <h1 className="text-2xl font-bold">
                Lorenzo Abreu Martins Ribeiro
              </h1>
              <h3 className="text-xl">Full-stack programmer</h3>
              <h3 className="text-xl">Born in Brazil</h3>
              <div className="flex gap-5">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex h-15 justify-center items-center gap-x-1.5 rounded-md bg-gray-900 px-5 py-2 text-2xl font-sans  text-white shadow-xs ring-1 ring-gray-300  hover:bg-gray-600">
                      Follow me!
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute z-10 mt-2 w-60 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/llox.ss/"
                          className="flex gap-x-1.5 items-center px-4 py-2 text-lg text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          <FaInstagram />
                          @LLox.ss
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          target="_blank"
                          href="https://github.com/Lorwnzo-LP"
                          className="flex gap-x-1.5 items-center px-4 py-2 text-lg text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          <FaGithub />
                          Lorwnzo-LP
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/lorenzo-ribeiro-11b5b6275/"
                          className="flex gap-x-1.5 items-center px-4 py-2 text-lg text-white data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                        >
                          <FaLinkedin />
                          Lorenzo-Ribeiro
                        </a>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
                <button className="px-5 h-15 bg-white text-gray-800 border-2 border-gray-800 rounded-lg text-2xl flex place-content-center gap-5 items-center">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-5 flex flex-col gap-5 rounded-lg min-w-1/10 text-white">
            <h1 className="text-2xl font-bold">My programming knowledge:</h1>
            <div className="flex justify-around">
              <div>
                <h2 className="text-xl font-bold">Front-end:</h2>
                <ol className="flex flex-col list-disc">
                  <li>JavaScript/CSS/HTML</li>
                  <li>React.js</li>
                  <li>TypeScript</li>
                </ol>
              </div>
              <div>
                <h2 className="text-xl font-bold">Back-end:</h2>
                <ol className="flex flex-col list-disc">
                  <li>Node.js</li>
                </ol>
              </div>
            </div>
            <div className="place-self-center">
              <h2 className="text-xl font-bold">Data-base</h2>
              <ol className="flex flex-col list-disc">
                <li>SQLlite</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="h-full w-8/10 place-self-center">
          <h1 className="text-4xl w-full border-b-2 border-purple-700">
            Published projects
          </h1>
          <ol className="grid-cols-3 grid ">
            {projects.map((project) => {
              return (
                <li key={project.name}>
                  <Link
                    onClick={() => {
                      handleChose(project);
                    }}
                    to="/projects"
                  >
                    <ProjectCard
                      name={project.name}
                      image={project.image}
                      text={project.descriptionText}
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

    </>
  );
}
