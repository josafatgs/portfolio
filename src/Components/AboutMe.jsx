import "../styles.css";
import cube from "../../public/assets/cube.png";
import CubeInfo from "./CubeInfo";

function AboutMe() {
  return (
    <section className="bg-black p-8 md:p-16" id="AboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <h1 className="fontPrimary text-lg md:text-xl lg:text-2xl">
            About Me
          </h1>
          <h2 className="text-white text-4xl md:text-6xl pb-6 md:pb-10">
            I can deliver results that <br /> exceed your expectations.
          </h2>
          <a
            href="#"
            target="_blank"
            className="border-white border-2 text-white px-4 py-3 md:px-8 md:py-4 hover:bg-white hover:text-black focus:outline-none focus:border-gray-500 transition duration-300 ease-in-out"
          >
            Hire Me Now
          </a>
        </div>
        <img
          src={cube}
          alt="figure"
          className="w-full justify-self-end md:w-auto md:max-h-48 lg:max-h-64"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <img
          className="w-full md:w-auto md:max-h-48 lg:max-h-64"
          src={cube}
          alt="figure"
        />
        <div className="flex flex-col justify-center">
          <span className="text-gray-400 text-2xl">
            I am Josafat, a developer passionate about technology and continuous
            learning. I love working on challenging projects that allow me to
            enhance my skills and learn new technologies. I am someone who
            enjoys undertaking projects where I can learn and improve in topics
            related to software architecture.
          </span>
          <div className="grid place-content-center grid-cols-3 mt-4 md:mt-0">
            <CubeInfo number={"5"} characteristic={"Projects Completed"} />
            <CubeInfo number={"2"} characteristic={"Years Experience"} />
            <CubeInfo number={"4"} characteristic={"World Clients"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
