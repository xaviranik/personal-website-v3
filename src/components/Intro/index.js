import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <div className="w-full m-auto max-w-screen-lg text-gray-300">
      <div className="flex flex-col h-screen justify-center items-center -mt-20 px-8">
        <Fade bottom>
          <h1 className="text-brand text-sm md:text-xl mt-8 font-mono">
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
          <Link
            className="flex border-2 border-solid border-brand px-7 py-3 text-brand rounded-md transform hover:bg-brand hover:text-navy text-xl font-medium transition duration-700 ease-in-out mt-12 md:mt-24 md:text-xl"
            to="/"
          >
            Let's Hear From You
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
