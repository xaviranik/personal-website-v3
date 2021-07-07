import { Link as LinkR } from "react-router-dom";
import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="w-full m-auto max-w-screen-lg text-left px-8 mt-32"
    >
      <div className="section-heading">
        <Fade bottom>
          <h1 className="text-gray-300 text-2xl font-medium underline-x md:inline-block md:text-3xl">
            Projects
          </h1>
        </Fade>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-8">
          <Fade left>
            <ProjectCard
              thumbnail="https://www.wrike.com/professional-services-guide/uploads/project-management-guide/b9bcc9bd-ae90-4d81-9214-9f0d69267f62/3-introducing-project-management-tools-thumbnail.png?auto=compress%2Cformat&dpr=1&fit=min&fm=jpg&q=60&rect=%2C%2C%2C"
              name="CurlyCamp"
              description="Project Management Application for task managements and collaboration"
              tags={["Laravel", "MySQL", "Vue.js", "Heroku"]}
              links={{
                github: "https://github.com/xaviranik/curlycamp",
                external: "http://ggcurlycamp.herokuapp.com/",
              }}
            />
          </Fade>

          <Fade right>
            <ProjectCard
              thumbnail="https://www.wrike.com/professional-services-guide/uploads/project-management-guide/b9bcc9bd-ae90-4d81-9214-9f0d69267f62/3-introducing-project-management-tools-thumbnail.png?auto=compress%2Cformat&dpr=1&fit=min&fm=jpg&q=60&rect=%2C%2C%2C"
              name="Devvit"
              description="Forum application for developers where group discussions are based on channels / topics"
              tags={["Laravel", "MySQL", "Heroku"]}
              links={{
                github: "https://github.com/xaviranik/laravel-discussion-forum",
                external: "",
              }}
            />
          </Fade>

          <Fade left>
            <ProjectCard
              thumbnail="https://www.wrike.com/professional-services-guide/uploads/project-management-guide/b9bcc9bd-ae90-4d81-9214-9f0d69267f62/3-introducing-project-management-tools-thumbnail.png?auto=compress%2Cformat&dpr=1&fit=min&fm=jpg&q=60&rect=%2C%2C%2C"
              name="Lifehacks"
              description="A one stop blogging platform"
              tags={["Laravel", "MySQL", "Heroku"]}
              links={{
                github: "https://github.com/xaviranik/laravel-blog",
                external: "http://gglifehacks.herokuapp.com/",
              }}
            />
          </Fade>

          <Fade right>
            <ProjectCard
              thumbnail="https://www.wrike.com/professional-services-guide/uploads/project-management-guide/b9bcc9bd-ae90-4d81-9214-9f0d69267f62/3-introducing-project-management-tools-thumbnail.png?auto=compress%2Cformat&dpr=1&fit=min&fm=jpg&q=60&rect=%2C%2C%2C"
              name="Larademy"
              description="An E-Learning Web Application"
              tags={["Laravel", "MySQL", "Redis", "Heroku"]}
              links={{
                github: "https://github.com/xaviranik/larademy",
                external: "",
              }}
            />
          </Fade>

          <Fade left>
            <ProjectCard
              thumbnail="https://www.wrike.com/professional-services-guide/uploads/project-management-guide/b9bcc9bd-ae90-4d81-9214-9f0d69267f62/3-introducing-project-management-tools-thumbnail.png?auto=compress%2Cformat&dpr=1&fit=min&fm=jpg&q=60&rect=%2C%2C%2C"
              name="WellBeing Pharmacy"
              description="WellBeing Pharmacy is an online Pharmacy & also one-stop destination for online healthcare products and services"
              tags={["Laravel", "MySQL", "Java", "REST"]}
              links={{ github: "", external: "" }}
            />
          </Fade>

          <Fade right>
            <ProjectCard
              thumbnail="https://www.wrike.com/professional-services-guide/uploads/project-management-guide/b9bcc9bd-ae90-4d81-9214-9f0d69267f62/3-introducing-project-management-tools-thumbnail.png?auto=compress%2Cformat&dpr=1&fit=min&fm=jpg&q=60&rect=%2C%2C%2C"
              name="MyNUB"
              description="MyNUB is a student assistance application for organizing academics, finances and interaction with teachers"
              tags={["Java", "Firebase"]}
              links={{
                github: "https://github.com/xaviranik/MyNUB",
                external: "",
              }}
            />
          </Fade>
        </div>
        <Fade bottom>
          <div className="flex items-center justify-center">
            <LinkR
              className="inline-block border-2 border-solid border-brand px-5 py-3 text-brand rounded-md cursor-pointer transform hover:bg-brand-light text-md font-medium transition duration-700 ease-in-out mt-12 md:mt-8 md:text-xl"
              to="#"
            >
              Show More
            </LinkR>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Portfolio;
