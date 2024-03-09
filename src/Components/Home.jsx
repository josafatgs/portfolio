import portrait from "../assets/portrait.png";
import "../styles.css";

function Home() {

  return (
    <section className="bg-black text-white p-t-16 px-8 md:px-16 lg:px-32 xl:px-48" id="Home">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-around">
        <div className="text-center md:text-left">
          <h1 className="primaryFont text-9xl font-bold mb-4">Josafat García</h1>
          <p className="text-lg text-gray-400">Hello, nice to meet you, I'm Software Engineer & I would like to introduce you to my portfolio </p>
        </div>

        <img
          src={portrait}
          alt="Josafat García"
          className=" opacity-50 hover:opacity-100 w-auto h-screen mb-8 md:mb-0 md:mr-8"
        />
      </div>
    </section>
  );
}

export default Home;
