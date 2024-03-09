import skills from "../assets/skills.json"

function Skills({ title, skillList }) {

    console.log(skills);

    function getPath(skillName) {
      const skill = skills.find(skills => skills.name.toLowerCase() == skillName.toLowerCase());
      return skill ? skill.path : null;
    }

    const numRows = Math.ceil(skillList.length / 4) < 1 ? 1 : Math.ceil(skillList.length / 4) ;
    const numCols = skillList.length < 4 ? skillList.length : 4;

  return (
    <article className="bg-neutral-900 p-4 border-white border-2 m-4 rounded-lg" id="Skills">
      <h2 className="text-gray-400">{title}</h2>
      <div className={`grid grid-cols-${numCols} grid-rows-${numRows} grid-flow-row gap-4 p-4`} style={{ gridTemplateRows: `repeat(${numRows}, auto)` }}>
        {skillList.map((skill, index) => (
            <div key={index} className="flex items-center justify-center">
            <img
                src={getPath(skill)}
                alt={`Image ${index}`}
                className="w-10 h-10 object-contain"
            />
            </div>
        ))}
      </div>
    </article>
  );
}

export default Skills;
