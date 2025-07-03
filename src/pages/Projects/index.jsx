import { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import ProjectCard from "../../components/ProjectCard";

import { Link, useParams } from "react-router-dom";
import { useGlobal } from "../GlobalVariables/GlobalLanguage";
import ProjectApi from "../../API";
import imagem from "/SecurityChannel.png";

const projects = await ProjectApi.fetchFullData();

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id;

  const { globalLanguage, setGlobalLanguage } = useGlobal();

  const [project, setProject] = useState(() => {
    const projectIndex = projects.findIndex(
      (project) => project._id == projectId
    );
    return projects[projectIndex];
  });

  useEffect(() => {
    if (projectId) {
      const newProject = projects.find((element) => element._id == projectId);
      if (newProject) {
        setProject(newProject);
      }
    }
  }, [projectId, projects]);

  const handleUpdate = () => {
    setProject((prevState) => ({
      ...prevState,
      Favorite: !prevState.Favorite,
    }));
  };

  const handleClose = () => {
    setProject(null); // Use null para indicar que não há projeto selecionado
  };
  return (
    <div className="pb-50">
      {project ? (
        <section className="w-8/10 place-self-center mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-bold mb-5">{project.name}</h1>
            <button
              onClick={() => {
                handleClose();
              }}
            >
              <Link to={`/projects`}>
                <TfiClose size={40} />
              </Link>
            </button>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full border-2">
              {project.link == "" ? (
                <img
                  className="w-full h-full bg-blue-500"
                  src={imagem}
                  alt="Image from project."
                />
              ) : (
                <iframe className="w-full h-full" src={project.link}></iframe>
              )}
            </div>

            <div className="min-w-100 flex flex-col gap-5 justify-between bg-gray-600 w-1/2 p-10 rounded-lg text-white border-2 border-purple-500">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl border-b-2 border-purple-400">
                  {project.name}
                </h2>
                <h3 className="text-md xl:text-xl">
                  {globalLanguage == "English"
                    ? "Programming usage:"
                    : "Programação usada:"}
                </h3>
                <ol className="list-disc grid grid-flow-col grid-cols-3 grid-rows-3 text-md xl:text-lg">
                  {project
                    ? project.programmingLanguages.map((programming) => {
                        return <li key={programming}>{programming}</li>;
                      })
                    : ""}
                </ol>
                <h3 className="text-md xl:text-xl">
                  {globalLanguage == "English" ? "Description:" : "Descrição:"}
                </h3>
                <p className="text-ellipsis ">
                  {globalLanguage == "English"
                    ? project.descriptionEn
                    : project.descriptionPt}
                </p>
              </div>
              <div className="flex justify-between">
                <div
                  style={{ cursor: "pointer" }}
                  className="pointer-events-auto"
                  onClick={() => {
                    handleUpdate();
                  }}
                ></div>
                <a
                  className="bg-gray-900 border-2 border-purple-600 w-fit px-5 py-2 rounded-lg place-self-end"
                  href={project.link}
                  hidden={project.finished == true ? false : true}
                >
                  {globalLanguage == "English"
                    ? "Visit website"
                    : "Visitar website"}
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="text-center m-10">
          <h1 className="text-3xl ">
            {globalLanguage == "English"
              ? "Chose one project to see more details"
              : "Escolha um projeto para ver mais detalhes"}
          </h1>
        </div>
      )}
      <section className="h-full w-8/10 place-self-center mt-15  flex">
        <div className="">
          <h1 className="text-2xl text-center">
            {globalLanguage == "English"
              ? "Finished projects"
              : "Projetos finalizados"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 ">
            {projects.map((project) => {
              if (project.finished == true) {
                return (
                  <div key={project._id}>
                    <Link to={`/projects/${project._id}`}>
                      <ProjectCard
                        language={globalLanguage}
                        name={project.name}
                        image={project.imageURL}
                        textEn={project.descriptionEn}
                        textPt={project.descriptionPt}
                        programming={project.programmingLanguages}
                      />
                    </Link>
                  </div>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
        <div className="w-8/10 items-center 2xl:w-1/2">
          <h1 className="text-2xl text-center">
            {globalLanguage == "English"
              ? "Projects in progress"
              : "Projetos em progresso"}
          </h1>
          <div className="flex flex-col place-self-center">
            {projects.map((project) => {
              if (project.finished == false) {
                return (
                  <div key={project._id}>
                    <Link className="flex place-content-center" to={`/projects/${project._id}`}>
                      <ProjectCard
                        language={globalLanguage}
                        name={project.name}
                        image={project.imageURL}
                        textEn={project.descriptionEn}
                        textPt={project.descriptionPt}
                        programming={project.programmingLanguages}
                      />
                    </Link>
                  </div>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
