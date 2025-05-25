import Andrea from "../assets/Andrea.png";

const About = () => {
  return (
    <div
      className="h-full md:h-screen sm:w-auto sm:mx-48 flex flex-col-reverse sm:grid sm:grid-cols-1 gap-4 content-center lg:grid-cols-2 place-content-center text-slate-900 text-justify"
      id="about-me"
    >
      <div className="about-me">
        <h4 className="sm:text-5xl text-2xl font-bold text-slate-900 text-center leading-loose sm:mb-10 mb-3">
          About <span className="text-orange-500">Me!</span>
        </h4>
        <p className="mb-4">
          I'm a BS Information Systems graduate and a passionate Web
          Developer and Designer at that. I started my coding journey when I
          took Information and Communications Technonlogy during my SHS years
          and was inspired by my friends to continue this path.
        </p>
        <p className="mb-4">
          As of now, I'm working into becoming a better developer who's continuously improving IT skills to provide better experiences through my applications.
        </p>
      </div>
      <div className="my-profile grid">
        <img
          src={Andrea}
          alt="Andrea Maurice De Guzman"
          width={"50%"}
          className="border-slate-900 border-4 sm:border-8 place-self-center drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default About;
