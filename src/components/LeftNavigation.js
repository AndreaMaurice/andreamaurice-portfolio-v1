import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import Logo from "../assets/Logo.svg";

const LeftNavigation = () => {
  return (
    <div className="h-screen sm:w-24 lg:ml-0 ml-3 flex flex-col fixed">
      <div className="flex-1">
        <Link
          to="banner"
          spy={true}
          activeClass="active"
          smooth={true}
          duration={500}
        >
          <img
            src={Logo}
            width={50}
            className="mx-auto mt-5"
            alt="Andrea's Logo"
          />
        </Link>
      </div>
      <div className="flex-1 lg:border-r-2 lg:border-slate-300 content-center space-y-4 invisible lg:visible">
        <IconContext.Provider
          value={{
            className:
              "text-slate-700 w-10 h-11 mx-auto hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
          }}
        >
          <div>
            <a
              href={"https://github.com/AndreaMaurice"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandGithub />
            </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className:
              "text-slate-700 w-9 h-9 mx-auto hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
          }}
        >
          <div>
            <a
              href={"https://www.linkedin.com/in/andrea-maurice-de-guzman47/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            className:
              "text-slate-700 w-9 h-9 mx-auto hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110",
          }}
        >
          <div>
            <a
              href={"mailto:andreamauricedeguzman@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default LeftNavigation;
