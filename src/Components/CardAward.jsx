function CardAwards({ imagePath, title }) {
  return (
    <div className="flex flex-col w-full sm:w-80 h-auto sm:p-10 mt-10">
      <img src={imagePath} alt="award" className="rounded-t-lg" />
      <div className="border-t-2 border-t-gray-400 bg-black p-4 rounded-b-lg">
        <h1 className="text-white text-lg text-balance">{title}</h1>
      </div>
    </div>
  );
}

export default CardAwards;
