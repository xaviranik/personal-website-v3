import Popup from "reactjs-popup";
import { ProjectData } from "../data/ProjectData";
import ImageSlider from "../ImageSlider";

const ProjectPopup = ({ name }) => {
  const getProjectSliderImages = () => {
    let images = [];
    ProjectData.forEach((data) => {
      if (data.name === name) {
        images = data.images;
      }
    });

    return images;
  };

  let images = getProjectSliderImages();

  return (
    <Popup
      trigger={
        images.length > 0 && (
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 hidden hover:text-brand transition duration-1000 ease-in-out transform hover:-translate-y-1 md:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        )
      }
      modal
      nested
    >
      {(close) => (
        <div className="h-screen w-screen bg-navy-lightest relative">
          <div className="text-brand">
            <ImageSlider slides={images} />
          </div>
          <div
            onClick={() => {
              close();
            }}
          >
            <svg
              className="h-12 text-brand hover:text-brand transition duration-1000 ease-in-out transform hover:-translate-y-1 absolute right-8 top-8 animate-pulse cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ProjectPopup;
