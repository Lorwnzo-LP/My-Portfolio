import { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import imagemBase from "/src/assets/imagemBase.png";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../projects";

export default function ProjectPage() {
  const handleClick = (chosen) => {
    setProject({
      name: chosen.name,
      image: chosen.image,
      descriptionText: chosen.descriptionText,
      link: chosen.link,
      programming: chosen.programming,
      finished: chosen.finished
    })

    console.log(project);
  };

  const [project, setProject] = useState({
    name: "First Project",
    image: imagemBase,
    languages: ["React.js"],
    descriptionText:
      "Descricao do projeto aqui em baixo para descrever o que o projeto faz e quais linguágens foram utilizadas",
    Favorite: true,
    link: "http://localhost:5173",
  });

  const handleUpdate = () => {
    setProject((prevState) => ({ ...prevState, Favorite: !project.Favorite }));
  };

  const handleClose = () => {
    setProject("");
  };

  return (
    <>
      {project ? (
        <section className="w-8/10 place-self-center mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-bold mb-5">Titulo do projeto</h1>
            <button
              onClick={() => {
                handleClose();
              }}
            >
              <TfiClose size={40} />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full border-2">
              <iframe className="w-full h-full" src={project.link}></iframe>
            </div>
            <div className="min-w-100 flex flex-col gap-5 justify-between bg-gray-600 w-1/2 p-10 rounded-lg text-white border-2 border-purple-500">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl border-b-2 border-purple-400">
                  Titulo do projeto
                </h2>
                <h3 className="text-md xl:text-xl">Programming usage:</h3>
                <ol className="list-disc grid grid-flow-col grid-cols-3 grid-rows-3 text-md xl:text-lg">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React.js</li>
                  <li>MongoDB</li>
                </ol>
                <h3 className="text-md xl:text-xl">Description:</h3>
                <p className="text-ellipsis ">
                  texto do projeto que pode ter mais de uma linha ou talvez mais
                  de 2 linhas
                </p>
              </div>
              <div className="flex justify-between">
                <div
                  style={{ cursor: "pointer" }}
                  className="pointer-events-auto"
                  onClick={() => {
                    handleUpdate();
                  }}
                >
                  {project.Favorite ? (
                    <CiStar size={40} />
                  ) : (
                    <FaStar size={40} />
                  )}
                </div>
                <a
                  className="bg-gray-900 border-2 border-purple-600 w-fit px-5 py-2 rounded-lg place-self-end"
                  href="#"
                >
                  Visit website
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center m-10">
          <h1 className="text-3xl ">Chose one project to see more details</h1>
        </div>
      )}
      <section className="h-full w-8/10 place-self-center mt-15 flex">
        <div className="w-3/4">
          <h1 className="text-2xl text-center">Finished projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  text={project.descriptionText}
                  programming={project.programming}
                  onClick={() => {handleClick(project)}}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-2xl">Projects in progress</h1>
        </div>
      </section>
    </>
  );
}
