import { Link, useLocation } from "react-router-dom";
import LinkComponent from "../LinkComponent";

export default function HeaderComponent() {
  const location = useLocation();


  return (
    <section className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-400">
      <div className="h-30 flex gap-10 place-self-center place-content-between items-center w-7/10 relative">
        <h1 className="text-2xl font-bold text-white ">Welcome!</h1>

        <ul className="flex gap-10">
          <li>
            <LinkComponent to="/home">Home</LinkComponent>
          </li>
          <li>
            <LinkComponent to="/projects">Projects</LinkComponent>
          </li>
          <li>
            <LinkComponent to="/about_me">About me</LinkComponent>
          </li>
        </ul>
        <button
          onClick={() => {
            console.log(location);
          }}
          className="px-5 h-15 bg-gradient-to-r from-purple-500 to-red-400 border-3 border-white rounded-lg font-semibold text-white hover:from-purple-400 hover:to-red-300"
        >
          Import informations
        </button>
      </div>
    </section>
  );
}
