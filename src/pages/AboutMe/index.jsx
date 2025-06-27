import myPhoto from "/src/assets/minha_foto_square.png";
import { useGlobal } from "../GlobalVariables/GlobalLanguage";

export default function AboutMePage() {
  const { globalLanguage, setGlobalLanguage } = useGlobal();
  return (
    <>
      <section className="w-8/10 place-self-center">
        <div className="flex justify-around">
          <div className="w-1/2 flex flex-col gap-10 mt-10">
            <h1 className="text-xl text-center">
              {globalLanguage == "English"
                ? "It's a pleasure meating you!"
                : "É um prazer conhecer-lo/la!"}
            </h1>
            <p>
              {globalLanguage == "English"
                ? `Hi, my name is Lorenzo and I'm a programmer from Brazil. My story
              with tecnology started from when I was young, when I would surpass
              my mother rules just to stay a little more on PC searching and see
              an infinity of possibilities.`
                : `Olá, meu nome é Lorenzo e sou um programador do Brasil. Minha história com a tecnologia iniciou desde de pequeno, quando eu atravessava as regras da minha mãe só pra estar um pouco mais no PC pesquisando e vendo uma infinidade de possibilidade.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `I was in love with every new thing I would discover, from games
              to random information that I found. By the end of my school, I
              wasn't sure of what I would do for living. My last year was in the
              middle of the world pandemic and I saw myself mentally destroyed,
              like almost everyone of us, people.`
                : `Eu estava apaixonado com cada coisa nova que eu descobria, de jogos a informações aleatórias que eu encontrava. Ao terminar a escola, eu não tive certeza sobre o que queria fazer para viver. Meu último ano escolar foi no meio da pandemia global e eu me encontrava mentalmente destruído.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `Then, I've tried the Law college. Let's say it wasn't for me, I
              wasn't feeling that famous pleasure from studying. It was hard to
              accept but I left that course and spend some time for myself. I
              worked in a huge store at the mall while figuring out what I'm
              going to do. I spoke with a bunch of different professionals to
              see if I would like to work with any area.`
                : `Então, tentei a faculdade de direito. Vamos só dizer que não era pra mim, Eu não estava sentindo aquele famoso prazer por estudar. Foi difícil aceitar mas eu deixei o curso e tive um tempo só pra mim. Eu trabalhei numa grande loja no shopping enquanto descobria o que eu iria fazer. Eu falei com um grande número de profissionais para conhecer sobre como era a área de atuação.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `One time, at work, I spoke with a man, he was a software enginner and explained how his work was, every details was so fascinating to me that in the next day, I searched for any course for programming. Over time, I started to feel that famous pleasure that I've always heard of.`
                : `Derrepente, no trabalho, enquanto usava o sistema da empresa, Eu conversei com um homem, ele era um engenheiro de software e explicou como seu trabalho funcionava, cada detalhe era tão facinante para mim que no próximo dia, eu pesquisei sobre um curso de programação. Com o tempo, Eu comecei a sentir aquele famoso prazer que sempre escutei sobre.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `As a sinal, I dove into the world of programming, saying to
              myself that's going to be my future. Being honest, I don't
              know what I'm going to do if it doesn't work, but until there,
              I'll be going forward.`
                : `Como um sinal, eu mergulhei no mundo da programação, dizendo a mim mesmo que seria o meu futuro. Sendo honesto, eu não sei o que eu vou fazer caso não dê certo, mas até lá, eu vou continuar avançando.`}
            </p>
          </div>
          <div className="bg-gray-800 flex flex-col rounded-lg mt-10 w-100 gap-5 p-5 text-white">
            <img className="rounded-full" src={myPhoto} alt="minha foto" />
            <h1 className="text-xl">
              {globalLanguage == "English"
                ? "Personal Information"
                : "Informações pessoais"}
              :
            </h1>
            <h2 className="">Lorenzo de Abreu Martins Ribeiro</h2>
            <h2 className="">Email: LorenzoContato1@outlook.com</h2>
            <h2 className="">
              {globalLanguage == "English" ? "Phone" : "Celular"}: +55 27
              99963-0703
            </h2>
            <h2 className="">
              {globalLanguage == "English" ? "Adress" : "Endereço"}:{" "}
              {globalLanguage == "English" ? "Street" : "Rua"} Almirante Soído,
              Santa Helena, Vitória, ES,{" "}
              {globalLanguage == "English" ? "Brazil" : "Brasil"}
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
