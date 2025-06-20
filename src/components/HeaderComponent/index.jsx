import { Link, useLocation } from "react-router-dom";
import LinkComponent from "../LinkComponent";
import { useGlobal } from "../../GlobalContext";

export default function HeaderComponent() {
  const location = useLocation();
  const { globalLanguage, setGlobalLanguage } = useGlobal();

  return (
    <section className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-400">
      <div className="h-30 flex gap-10 place-self-center place-content-between items-center w-7/10 relative">
        <h1 className="text-2xl font-bold text-white ">
          {globalLanguage == "English" ? "Welcome!" : "Bem vindo!"}
        </h1>

        <ul className="flex gap-10">
          <li>
            <LinkComponent to="/home">Home</LinkComponent>
          </li>
          <li>
            <LinkComponent to="/projects">
              {globalLanguage == "English" ? "Projects" : "Projetos"}
            </LinkComponent>
          </li>
          <li>
            <LinkComponent to="/about_me">
              {globalLanguage == "English" ? "About me" : "Sobre mim"}
            </LinkComponent>
          </li>
        </ul>
        <button
          onClick={() => {
            console.log(location);
          }}
          className="px-5 h-15 bg-gradient-to-r from-purple-500 to-red-400 border-3 border-white rounded-lg font-semibold text-white hover:from-purple-400 hover:to-red-300"
        >
          {globalLanguage == "English"
            ? "Import informations"
            : "Importar informações"}
        </button>
      </div>
    </section>
  );
}
