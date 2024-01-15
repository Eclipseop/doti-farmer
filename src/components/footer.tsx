import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center text-gray-500 text-2xl pb-1">
      <a
        href="https://github.com/Eclipseop/doti-farmer"
        className="hover:text-white"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
