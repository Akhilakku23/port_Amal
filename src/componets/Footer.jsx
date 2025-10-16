import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/in/akhil-saji-7027892b5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:amalmanoj2255@gmail.com"
            aria-label="Email"
            className="text-xl hover:text-blue-500"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/akhi_l._/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-xl  hover:text-blue-500"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; 2025 Amal Manoj. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
