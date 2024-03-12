import "../styles.css";

function CardProjet({imagePath, title, description, codeLink, demoLink}) {
  return (
    <div className="flex flex-col w-full sm:w-96 h-auto sm:p-10 mt-10">
      <img src={imagePath} alt="project" className="rounded-t-lg" />
      <div className="border-t-2 border-t-gray-400 bg-black p-4 rounded-b-lg">
        <h1 className="text-gray-400 text-lg text-balance p-2">{title}</h1>
        <p className="text-white text-sm text-balance p-2">{description}</p>
        <div className="flex justify-around p-4">
            <a href={codeLink} target="_blank" className="text-white border-white border-2 flex items-center justify-center py-px px-4 rounded-xl text-sm">Code <img className="w-4 h-auto filter invert ml-2" src="./assets/github_link.svg"/></a>
            {demoLink && <a href={demoLink} target="_blank" className="colorPrimary hover:text-white hover:bg-black border-white border-2 flex items-center justify-center py-px px-4 rounded-xl text-sm">Demo <img className="w-4 h-auto hover:filter hover:invert ml-2" src="./assets/open_link.svg"/></a>}
        </div>
      </div>
    </div>
  );
}

export default CardProjet;
