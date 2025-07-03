import myPhoto from "/src/assets/minha_foto_square.png";
import { useGlobal } from "../GlobalVariables/GlobalLanguage";

export default function AboutMePage() {
  const { globalLanguage, setGlobalLanguage } = useGlobal();
  return (
    <>
      <section className="w-8/10 place-self-center mb-15">
        <div className="flex justify-around">
          <div className="w-1/2 flex flex-col gap-10 mt-10 text-xl">
            <h1 className="text-4xl text-center">
              {globalLanguage == "English"
                ? "It's a pleasure meeting you!"
                : "É um prazer conhecer-lo/la!"}
            </h1>
            <p>
              {globalLanguage == "English"
                ? `Hello, my name is Lorenzo and I am a Brazilian programmer. My story with technology began when I was young, when I would go beyond my mother's rules just to dedicate myself a little more to computer researches and see an infinite number of possibilities.
`
                : `Olá, meu nome é Lorenzo e sou um programador do Brasil. Minha história com a tecnologia iniciou desde de pequeno, quando eu atravessava as regras da minha mãe só pra estar um pouco mais no PC pesquisando e vendo uma infinidade de possibilidade.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `I fell in love with every new thing I discovered, from games to random information I found. When I finished college, I wasn't sure what I was going to do with my life. My last year was in the middle of a global pandemic and I found myself mentally destroyed, like most of us humans.`
                : `Eu estava apaixonado com cada coisa nova que eu descobria, de jogos a informações aleatórias que eu encontrava. Ao terminar a escola, eu não tive certeza sobre o que queria fazer para viver. Meu último ano escolar foi no meio da pandemia global e eu me encontrava mentalmente destruído.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `Then I tried law school. Let's just say it wasn't for me, I wasn't feeling that famous pleasure of studying. It was hard to accept, but I dropped out and dedicated some time to myself. I worked in a huge store in the mall while I decided what I wanted to do. I talked to several different professionals to see if I would like to work in a certain area.
`
                : `Então, tentei a faculdade de direito. Vamos só dizer que não era pra mim, Eu não estava sentindo aquele famoso prazer por estudar. Foi difícil aceitar mas eu deixei o curso e tive um tempo só pra mim. Eu trabalhei numa grande loja no shopping enquanto descobria o que eu iria fazer. Eu falei com um grande número de profissionais para conhecer sobre como era a área de atuação.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `One time, at work, I talked to a man, he was a software engineer and explained to me what his job was like. Every detail fascinated me so much that the next day I looked for a programming course. Over time, I began to feel that famous pleasure I had always heard about.
`
                : `Derrepente, no trabalho, enquanto usava o sistema da empresa, Eu conversei com um homem, ele era um engenheiro de software e explicou como seu trabalho funcionava, cada detalhe era tão facinante para mim que no próximo dia, eu pesquisei sobre um curso de programação. Com o tempo, Eu comecei a sentir aquele famoso prazer que sempre escutei sobre.`}
            </p>
            <p>
              {globalLanguage == "English"
                ? `As a sign, I dove into the world of programming, telling myself that this would be my future. To be honest, I don't know what I'll do if it doesn't work out, but until then, I'll keep going.`
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
