import Fade from "react-reveal/Fade";
import { Link as LinkR } from "react-router-dom";
import SocialLinks from "../SocialLinks";

const index = () => {
  const mailTo = (e) => {
    window.location = "mailto:zabiranik.me@gmail.com";
    e.preventDefault();
  };

  return (
    <div id="contact" className="w-full m-auto max-w-screen-lg px-8 mt-12">
      <div className="flex flex-col h-screen justify-center items-center text-center">
        <div className="section-heading">
          <Fade bottom>
            <h1 className="text-gray-300 text-2xl font-medium underline-x md:inline-block md:text-3xl">
              Contact
            </h1>
          </Fade>
        </div>
        <div className="my-6 md:my-9">
          <Fade left>
            <h1 className="text-gray-400 text-xl md:text-3xl font-medium">
              I'd love to hear from you
            </h1>
          </Fade>

          <Fade left>
            <p className="mt-3 md:mt-4 text-gray-500 text-sm md:text-lg leading-relaxed max-w-md">
              Feel free to share your thoughts. my inbox is always open. Whether
              you have a question or just want to say hi, I'll try my best to
              get back to you!
            </p>
          </Fade>

          <Fade bottom>
            <LinkR
              className="inline-block border-2 border-solid border-brand px-5 py-3 text-brand rounded-md cursor-pointer transform hover:bg-brand-light text-md font-medium transition duration-1000 ease-in-out mt-12 md:mt-24 md:text-xl"
              to="#"
              onClick={mailTo}
            >
              Let's Talk
            </LinkR>
          </Fade>

          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default index;
