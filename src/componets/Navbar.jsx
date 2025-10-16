import { FaEnvelope , FaInstagram, FaLinkedin,} from "react-icons/fa"; // Fixed Twitter icon import
import logo from "../assets/AK/am.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            alt="Amal logo"
            className="h-14 w-auto filter invert brightness-200 "
          />
        </a>
      </div>

      {/* Social Media Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/amal-manoj-a18327321/ "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>

         <a
            href="mailto:amalmanoj2255@gmail.com"
            aria-label="Email"
            className="text-xl  hover:text-blue-500"
          >
            <FaEnvelope />
          </a>

        <a
          href="https://www.instagram.com/am._.l_?igsh=MTd2MzJyOTk0dDBvbQ=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className= "hover:text-blue-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
