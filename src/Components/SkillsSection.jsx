import "../styles.css";
import Skills from "./Skills";

function SkillSection() {
    return(
        <section className="bg-black p-16 grid">
            <h1 className="fontPrimary text-2xl justify-self-center">Skills</h1>
            <div className="grid grid-cols-1 place-content-center sm:grid-cols-2 sm:px-48 p-4">
                <Skills title={"Frontend"} skillList={["react", "javascript", "html", "css", "figma", "tailwind"]}></Skills>
                <Skills title={"Backend"} skillList={["python", "java", "expressjs", "nodejs", "elixir", "postman", "firestore", "mongodb", "django", "mysql"]}></Skills>
                <Skills title={"Otros"} skillList={["ubuntu", "git"]}></Skills>
            </div>
        </section>
    );
}

export default SkillSection;