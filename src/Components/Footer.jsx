function Footer() {
  return (
    <footer className="bg-black text-white p-14">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:border-r border-gray-600 md:pr-8 mb-4 md:mb-0">
          <div className="text-center md:text-right">
            <p className="text-lg mb-4">"Creating something Cool"</p>
            <p className="text-sm text-gray-400">© Josafat García Allrights Reserved {new Date().getFullYear()}</p>
          </div>
        </div>

        <ul>
          <li className="mb-2">
            <a href="#" target="_blanck" className="text-white hover:text-gray-400">
              Twitter
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.linkedin.com/in/josafat-garc%C3%ADa-sarmientos/" target="_blanck" className="text-white hover:text-gray-400">
              LinkedIn
            </a>
          </li>
          <li className="mb-2">
            <a href="https://github.com/josafatgs" target="_blanck" className="text-white hover:text-gray-400">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
