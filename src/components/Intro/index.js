import { Link as LinkS } from "react-scroll";
import Fade from "react-reveal/Fade";
import SocialLinks from "../SocialLinks";

const Intro = () => {
  return (
    <div className="w-full m-auto max-w-screen-lg text-gray-300">
      <div className="flex flex-col h-screen justify-center items-center -mt-20 px-8">
        <Fade bottom>
          <h1 className="text-brand text-sm md:text-xl font-mono mt-20">
            Hello, World
          </h1>
          <h1 className="text-4xl text-gray-300 font-semibold mt-4 md:text-7xl md:mt-8">
            I am <span>Zabir Anik</span>
          </h1>

          <h1 className="heading text-gray-400 text-2xl text-center mt-8 md:text-5xl md:mt-12">
            I love to think about{" "}
            <span className="underline-x text-gray-400">ideas</span> that
            matter.
          </h1>
          <LinkS
            className="flex border-2 border-solid border-brand px-7 py-3 text-brand rounded-lg cursor-pointer transform hover:bg-brand-light text-md font-medium transition duration-700 ease-in-out mt-12 md:mt-24 md:text-xl"
            to="contact"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-60}
          >
            Let's Hear From You
          </LinkS>
          <SocialLinks />
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
