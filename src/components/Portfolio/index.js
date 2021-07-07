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
              name="WellBeing Pharmacy"
              description="WellBeing Pharmacy is an online Pharmacy & also one-stop destination for online healthcare products and services"
              tags={["Laravel", "MySQL", "Java", "REST"]}
              links={{ github: "", external: "" }}
            />
          </Fade>

          <Fade right>
            <ProjectCard
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
      </div>
    </div>
  );
};

export default Portfolio;
