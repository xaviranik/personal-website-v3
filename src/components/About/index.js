import "./about.scss";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="w-full m-auto max-w-screen-lg text-left px-8">
      <div className="section-heading">
        <Fade bottom>
          <h1 className="text-gray-400 text-2xl font-medium underline-x md:inline-block md:text-3xl">
            About Me
          </h1>
        </Fade>
      </div>
      <div className="text-gray-500 mt-4 text-sm leading-relaxed md:text-base">
        <Fade bottom>
          <p>
            I began learning to code as something out of fascination rather than
            a career goal but something unexpected has occurred since then. I
            grew a devotion to the products that actually solve the problems.
          </p>
        </Fade>

        <div className="mt-4 md:mt-6">
          <Fade bottom>
            <p>Here are a few technologies I've been working with recently:</p>
          </Fade>
          <div className="grid grid-cols-2 gap-4 mt-4 font-mono text-brand opacity-75 md:text-sm animate-pulse">
            <Fade left>
              <div className="">PHP</div>
            </Fade>

            <Fade right>
              <div className="">Laravel</div>
            </Fade>

            <Fade left>
              <div className="">Javascript</div>
            </Fade>

            <Fade right>
              <div className="">React</div>
            </Fade>

            <Fade left>
              <div className="">MySQL</div>
            </Fade>

            <Fade right>
              <div className="">Wordpress Plugin Development</div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
