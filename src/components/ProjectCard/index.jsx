export default function ProjectCard({name, image, text, programming}) {
  return (
    <div className="flex flex-col py-5 gap-5 w-9/10 rounded-lg px-5 h-100 transition delay-100 duration-200 easy-in-out hover:-translate-1  hover:scale-110 ">
      <img
        className="bg-black border-1 border-purple-600 w-full h-30 object-fill place-self-center  rounded-xl"
        src={image}
        alt="imagem base"
      />
      <h2 className="text-2xl font-bold italic">
        {name}  
      </h2>
      <p>
        {text}
      </p>
      <ol>
        {programming? programming.map((program) =>{
          return <li key={program}>{program}</li>
        }) : <li>Nada aqui</li>}
      </ol>
    </div>
  );
}
