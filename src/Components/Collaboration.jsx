import "../styles.css";
import rectangle from "../../public/assets/rectangle.png";

function Collaboration() {
  return (
    <section className="bg-black flex flex-col items-center justify-center h-screen">
    <div className="relative flex flex-col justify-center items-center">
        <img src={rectangle} alt="figure" className="absolute left-0 top-0 transform rotate-6 w-16 h-16 md:w-32 md:h-32" />
        <div className="text-center z-10">
            <h1 className="fontPrimary text-lg md:text-xl lg:text-2xl">Collaboration</h1>
            <p className="text-white text-4xl md:text-6xl lg:text-9xl">Let's talk <br /> to collaborate</p>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
                <a href="#" target="_blank" className="text-black colorPrimary px-6 py-3 md:px-8 md:py-4 bg-white hoverPrimary focus:outline-none focus:borderPrimary transition duration-300 ease-in-out">Get in Touch</a>
                <a href="#" target="_blank" className="text-white border-white border-2 px-6 py-3 md:px-8 md:py-4 hover:bg-white hover:text-black focus:outline-none focus:border-gray-500 transition duration-300 ease-in-out">Hire me now</a>
            </div>
        </div>
        <img src={rectangle} alt="figure" className="absolute right-0 bottom-0 transform -rotate-6 w-16 h-16 md:w-32 md:h-32" />
    </div>
</section>

  );
}

export default Collaboration;
