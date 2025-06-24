import imagemTPT from "/TPT.png";
import imagemFokus from "/Fokus.png";

export const projects = [
  {
    id: 1,
    name: "Fokus",
    image: imagemFokus,
    descriptionEn:
      'Simple project for study which was made under the idea of the "Pomodoro Study Method"',
    descriptionPt:
      'Projeto simples para estudo o qual foi feito sob a ideia do "Metodo de estudo Pomodoro" ',
    programming: ["javaScript", "HTML", "CSS"],
    finished: true,
    link: "https://lorwnzo-lp.github.io/Projeto-Fokus-Alura/",
  },
  {
    id: 2,
    name: "The Personal Trainer",
    image: imagemTPT,
    descriptionEn:
      "Landing page for an app that helps personal trainers to manager their clients.",
    descriptionPt:
      "Pagina inicial para um app que ajuda personais trainers a gerenciar seus clientes",
    programming: ["React.js", "HTML", "CSS"],
    finished: true,
    link: "https://www.personaltpt.com.br",
  },
];
