import HeaderComponent from "../../components/HeaderComponent";
import myPhoto from "/src/assets/minha_foto_square.png";

export default function AboutMePage() {
  return (
    <>
      <section className="w-8/10 place-self-center">
        <div className="flex justify-around">
          <div className="w-1/2 flex flex-col gap-10 mt-10">
            <h1 className="text-xl text-center">
              It's a pleasure meating you!
            </h1>
            <p>
              Hi, my name is Lorenzo and I'm a programmer from Brazil. My story
              with tecnology started from when I was young, when I would surpass
              my mother rules just to stay a little more on PC searching and see
              an infinity of possibilities.
            </p>
            <p>
              I was in love with every new thing I would discover, from games,
              to random information that I found. By the end of my school, I
              wasn't sure of what I would do for living. My last year was in the
              middle of the world pandemic and I saw myself mentally destroyed,
              like almost everyone of us, people.
            </p>
            <p>
              Then, I've tried the Law college. Let's say it wasn't for me, I
              wasn't feeling that famous pleasure from studying. It was hard to
              accept but I left that course and spend some time for myself. I
              worked in a huge store at the mall while figuring out what I'm
              going to do. I spoke with a bunch of different professionals to
              see if I would like to work with any area.
            </p>
            <p>
              Suddenly, at my work, using the system of the company, I noticed
              that I could see across the page, see what was going on behind the
              screen and see all the wrong parts of its design and program. The next day I searched for any course for programming. Started to feel that pleasure I felt long before that time, a nostalgic feeling. I could see my younger self, trying to climb the office chair just to spend time online.
            </p>
            <p>
              As a sinal, I dived into this universe of programming, saying to myself that this is going to be my future. Being honest, I don't know what I'm going to do if it doesn't work, but untill there, I'll be going forward.
            </p>
          </div>
          <div className="bg-gray-800 flex flex-col rounded-lg mt-10 w-100 gap-5 p-5">
            <img className="rounded-full" src={myPhoto} alt="minha foto" />
            <h1 className="text-xl">Personal Information:</h1>
            <h2 className="">Lorenzo de Abreu Martins Ribeiro</h2>
            <h2 className="">Email: LorenzoContato1@outlook.com</h2>
            <h2 className="">Phone: +55 27 99963-0703</h2>
            <h2 className="">
              Adress: Rua Almirante Soído, Santa Helena, Vitória, ES, Brazil
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
