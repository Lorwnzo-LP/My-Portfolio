import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "/src/assets/minha_foto_square.png";
import ProjectCard from "../../components/ProjectCard";
import { Link } from "react-router-dom";
import { useGlobal } from "../GlobalVariables/GlobalLanguage";
import ProjectApi from "../../API";

const projects = await ProjectApi.fetchFullData();


export default function HomePage() {
  const { globalLanguage, setGlobalLanguage } = useGlobal();

  return (
    <>
      <section className="flex flex-col gap-10 mt-10">
        <div className="flex lg:flex-row flex-col gap-10 w-8/10 place-self-center justify-between">
          <div className=" place-self-center gap-10 flex">
            <img
              className="rounded-4xl w-80 h-90 top-1 border-4 border-purple-900"
              src={myPhoto}
              alt="Minha foto"
            />

            <div className="flex flex-col place-content-center gap-10">
              <h1 className="text-2xl font-bold">
                Lorenzo Abreu Martins Ribeiro
              </h1>
              <h3 className="text-xl">
                {globalLanguage == "English"
                  ? "Full-stack programmer"
                  : "Programador Full-stack"}
              </h3>
              <h3 className="text-xl">LorenzoContato1@outlook.com</h3>
              <div className=" z-10 mt-2 w-60 origin-top-right rounded-md ">
                <h3 className="text-xl inline-flex h-15 w-60 justify-center items-center gap-x-1.5 rounded-md bg-gray-900 font-sans text-white shadow-xs ring-1 ring-gray-300">
                  {globalLanguage == "English" ? "Follow me!" : "Me siga"}
                </h3>
                <div className="z-10 mt-2 w-60 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 ">
                  <div className="py-1">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/llox.ss/"
                      className="flex gap-x-1.5 items-center px-4 py-2 text-lg text-white hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                    >
                      <FaInstagram />
                      @LLox.s
                    </a>
                  </div>
                  <div className="py-1">
                    <a
                      target="_blank"
                      href="https://github.com/Lorwnzo-LP"
                      className="flex gap-x-1.5 items-center px-4 py-2 text-lg text-white hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                    >
                      <FaGithub />
                      Lorwnzo-LP
                    </a>
                  </div>
                  <div className="py-1">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/lorenzo-ribeiro-11b5b6275/"
                      className="flex gap-x-1.5 items-center px-4 py-2 text-lg text-white hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden"
                    >
                      <FaLinkedin />
                      Lorenzo-Ribeiro
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-600 p-5 flex flex-col gap-5 rounded-lg min-w-1/10 text-white">
                  <h1 className="text-xl font-bold">My Professional Experiênce</h1>
                  <ol className="flex flex-col gap-5">
                    <li className="bg-gray-700 px-2 rounded-lg">
                      <div className="flex flex-col">
                        <h1 className="text-xl">Development intern</h1>
                        <h2 className="text-sm">Nabeca - internship</h2>
                        <p className="text-sm">03/2025 - actual</p>
                        <p>Focus: Front-end</p>
                      </div>
                    </li>
                    <li className="bg-gray-700 px-2 rounded-lg">
                      <div className="flex flex-col">
                        <h1 className="text-xl">App developer</h1>
                        <h2 className="text-sm">The Personal Trainer - internship</h2>
                        <p className="text-sm">03/2025 - actual</p>
                        <p>Focus: API/Front-end</p>
                      </div>
                    </li>
                    <li className="bg-gray-700 px-2 rounded-lg">
                      <div className="flex flex-col">
                        <h1 className="text-xl">Programming intern</h1>
                        <h2 className="text-sm">StepByStep - internship</h2>
                        <p className="text-sm">04/2025 - actual</p>
                        <p>Focus: Full-stack</p>
                      </div>
                    </li>
                  </ol>
          </div>
          <div className="bg-gray-600 p-5 flex flex-col gap-5 rounded-lg min-w-1/10 text-white">
            <h1 className="text-2xl font-bold">
              {globalLanguage == "English"
                ? "My programming knowledge:"
                : "Meu conhecimento em programação:"}
            </h1>
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
                  <li>PostMan</li>
                </ol>
              </div>
            </div>
            <div className="place-self-center">
              <h2 className="text-xl font-bold">Data-base</h2>
              <ol className="flex flex-col list-disc">
                <li>SQLlite</li>
                <li>Mongo.db</li>
                <li>Firebase</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="h-full w-8/10 place-self-center">
          <h1 className="text-4xl w-full border-b-2 border-purple-700">
            {globalLanguage == "English"
              ? "Published projects"
              : "Projetos publicados"}
          </h1>
          <ol className="grid-cols-3 grid w-9/10 place-self-center">
            {projects.map((project) => {
              return (
                <li key={project.name}>
                  <Link
                    to={`/projects/${project._id}`}
                    onClick={() => {
                      console.log(project.id);
                    }}
                  >
                    <ProjectCard
                      language={globalLanguage}
                      name={project.name}
                      image={project.imageURL}
                      textEn={project.descriptionEn}
                      textPt={project.descriptionPt}
                      programming={project.programmingLanguages}
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
