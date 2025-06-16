
import imagemTPT from "/src/assets/TPT.png";
import imagemFokus from "/src/assets/Fokus.png"

export const projects = [
  {
    id: 1,
    name: "Fokus",
    image: imagemFokus,
    descriptionText:
      'Simple project for study which was made with the idea of the "pomodoro method"' ,
    programming: ["javaScript", "HTML", "CSS"],
    finished: true,
    link: "https://lorwnzo-lp.github.io/Projeto-Fokus-Alura/",
  },
  {
    id: 2,
    name: "The Personal Trainer",
    image: imagemTPT,
    descriptionText:
      'Landing page for an app that helps personal trainers to manager their clients.' ,
    programming: ["React.js", "HTML", "CSS"],
    finished: true,
    link: "https://www.personaltpt.com.br",
  }
];
