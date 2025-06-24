import { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";

import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../projects";
import { Link, useParams } from "react-router-dom";
import { useGlobal } from "../../GlobalContext";

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id;
  const { globalLanguage, setGlobalLanguage } = useGlobal();

  const [project, setProject] = useState();

  const [projectsState, setProjectsState] = useState(
    projects.map((chosen) => ({
      id: chosen.id,
      name: chosen.name,
      image: chosen.image,
      descriptionText: chosen.descriptionEn,
      link: chosen.link,
      programming: chosen.programming,
      finished: chosen.finished,
    }))
  );

  useEffect(() => {
    console.log("objeto atualizado: ", project);
  }, [project]);

  const updateProject = (newProject) => {
    setProject((prevProject) => ({
      ...prevProject,
      ...newProject, // Atualiza todas as propriedades de uma vez
    }));
  };

  useEffect(() => {
    if (projectId) {
      const newProject = projectsState.find(
        (element) => element.id === Number(projectId)
      );
      if (newProject) {
        setProject(newProject);
      }
    }
  }, [projectId, projectsState]);

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
    <div>
      {project ? (
        <section className="w-8/10 place-self-center mt-5">
          <div className="flex justify-between items-center">
            <h1 className="text-6xl font-bold mb-5">{project.name}</h1>
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
                  {project.name}
                </h2>
                <h3 className="text-md xl:text-xl">
                  {globalLanguage == "English"
                    ? "Programming usage:"
                    : "Programação usada:"}
                </h3>
                <ol className="list-disc grid grid-flow-col grid-cols-3 grid-rows-3 text-md xl:text-lg">
                  {project
                    ? project.programming.map((programming) => {
                        return <li key={programming}>{programming}</li>;
                      })
                    : ""}
                </ol>
                <h3 className="text-md xl:text-xl">
                  {globalLanguage == "English" ? "Description:" : "Descrição:"}
                </h3>
                <p className="text-ellipsis ">{project.descriptionText}</p>
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
                  href={project.link}
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
      <section className="h-full w-8/10 place-self-center mt-15 flex">
        <div className="w-3/4">
          <h1 className="text-2xl text-center">
            {globalLanguage == "English"
              ? "Finished projects"
              : "Projetos finalizados"}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 ">
            {projectsState.map((project) => {
              return (
                <div key={project.id}>
                  <Link to={`/projects/${project.id}`}>
                    <ProjectCard
                      language={globalLanguage}
                      name={project.name}
                      image={project.image}
                      textEn={project.descriptionEn}
                      textPt={project.descriptionPt}
                      programming={project.programmingLanguages}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-2xl">{globalLanguage=='English'? 'Projects in progress' : 'Projetos em progresso'}</h1>
        </div>
      </section>
    </div>
  );
}
