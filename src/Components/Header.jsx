function Header() {
  return (
    <header className="bg-black text-white flex justify-between items-center py-8 px-8">
      <ul className="flex flex-wrap">
        <li className="mr-4 mb-2">
          <img src="./assets/frame.png" alt="figure" className="w-8" />
        </li>
        <li className="mr-4 mb-2" id="#Home">
          <a href="#Home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li className="mr-4 mb-2">
          <a href="#Skills" className="hover:text-gray-400">
            Skills
          </a>
        </li>
        <li className="mr-4 mb-2">
          <a href="#AboutMe" className="hover:text-gray-400">
            About me
          </a>
        </li>
        <li className="mr-4 mb-2">
          <a href="#Projects" className="hover:text-gray-400">
            Projects
          </a>
        </li>
        <li className="mr-4 mb-2">
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </li>
        <li className="mr-4 mb-2">
          <a href="#" className="hover:text-gray-400">
            Own Products
          </a>
        </li>
      </ul>
      <div>
        <button className="bg-transparent border border-white text-white py-2 px-4 hover:bg-white hover:text-black focus:outline-none focus:border-gray-500 transition duration-300 ease-in-out">
          Contact Me
        </button>
      </div>
    </header>
  );
}

export default Header;
