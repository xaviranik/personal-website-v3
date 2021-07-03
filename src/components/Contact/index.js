import Fade from "react-reveal/Fade";
import { Link as LinkR } from "react-router-dom";
import SocialLinks from "../SocialLinks";

const index = () => {
  const mailTo = (e) => {
    window.location = "mailto:zabiranik.me@gmail.com";
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="w-full m-auto max-w-screen-lg text-left px-8 mt-32"
    >
      <div className="section-heading">
        <Fade bottom>
          <h1 className="text-gray-300 text-2xl font-medium underline-x md:inline-block md:text-3xl">
            Contact
          </h1>
        </Fade>
      </div>
      <div className="my-6">
        <Fade left>
          <h1 className="text-gray-400 text-xl font-medium">
            I'd love to hear from you
          </h1>
        </Fade>

        <Fade left>
          <p className="text-gray-500 mt-2 text-sm">
            Feel free to share your thoughts. my inbox is always open. Whether
            you have a question or just want to say hi, I'll try my best to get
            back to you!
          </p>
        </Fade>

        <Fade bottom>
          <LinkR
            className="inline-block border-2 border-solid border-brand px-5 py-3 text-brand rounded-md cursor-pointer transform hover:bg-brand-light text-md font-medium transition duration-1000 ease-in-out mt-12 md:mt-18 md:text-xl"
            to="#"
            onClick={mailTo}
          >
            Let's Talk
          </LinkR>
        </Fade>

        <div className="mb-64">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default index;
