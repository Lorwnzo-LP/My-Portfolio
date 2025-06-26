import LinkComponent from "../LinkComponent";
import { useGlobal } from "../../pages/GlobalVariables/GlobalLanguage";
import pdfUrlPt from "/src/assets/Perfil.pdf";
import pdfUrlEn from "/src/assets/Profile.pdf";
import BrazilFlag from "/src/assets/Brazil_Flag.png";
import EuaFlag from "/src/assets/EUA_Flag.png";
import { useEffect, useState } from "react";

export default function HeaderComponent() {

  const {globalLanguage, setGlobalLanguage} = useGlobal();

  const handleChangeLanguage = (lang) => {
      localStorage.setItem("language", lang)
      setGlobalLanguage(lang);

  };

  const downloadPDF = function () {
    const link = document.createElement("a");
    if (globalLanguage == "English") {
      link.href = pdfUrlEn;
      link.download = "Profile.pdf";
    } else {
      link.href = pdfUrlPt;
      link.download = pdfUrlEn;
    }
    link.click();
  };

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
        <div className="flex gap-10">
          {/* Download Button */}
          <button
            onClick={downloadPDF}
            className="px-5 h-15 place-self-center bg-gradient-to-r from-purple-500 to-red-400 border-3 border-white rounded-lg font-semibold text-white hover:from-purple-400 hover:to-red-300"
            
          >
            {globalLanguage === "English"
              ? "Download informations"
              : "Baixar informações"}
          </button>

          {/* Language Toggle Buttons */}
          <div className="flex gap-5 content-center mt-4 ">
            <button
            className=""
              onClick={() => handleChangeLanguage("Portuguese")}
              disabled={globalLanguage == 'Portuguese'? true : false}
            >
              <img
                src={BrazilFlag}
                alt="Brazil flag"
                className={`w-20 h-20 rounded-full border-2 ${
                  globalLanguage === "Portuguese"
                    ? "border-green-500"
                    : "grayscale"
                }`}
              />
            </button>

            <button
              onClick={() => handleChangeLanguage("English")}
              disabled={globalLanguage == 'English'? true : false}
            >
              <img
                src={EuaFlag}
                alt="USA flag"
                className={`w-20 h-20 rounded-full border-2 ${
                  globalLanguage === "English" ? "border-blue-500" : "grayscale"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
