import { useEffect, useState } from "react";
import { EpisodeType } from "./types";
import { Paths, baseUrl, validPaths } from "./constansts";
import { useLocation, useNavigate } from "react-router-dom";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function App() {
  const [episode, setEpisode] = useState<EpisodeType>();

  const { pathname: path } = useLocation();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const url = `${baseUrl}/${Paths.RANDOM}`;
      const res = await fetch(url);
      const data = await res.json();

      setEpisode(data);
    } catch (error) {
      alert("error fetching");
    }
  };

  useEffect(() => {
    if (validPaths.some((validPath) => `/${validPath}` === path)) {
      getData();
    }
  }, [path]);

  useEffect(() => {
    console.log(episode?.synopsis);
  }, [episode]);

  return (
    <div>
      <div className="relative w-screen h-screen">
        <img
          src="assets/images/desktop.webp"
          className="absolute object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <div className="absolute inset-0 flex flex-col justify-around z-10">
          <h1
            className="font-custom text-white text-3xl text-center
          "
            style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)" }}
          >
            Which episode I can see?
          </h1>
          <div className="flex flex-col">
            <img
              src="/assets/images/random.svg"
              alt="random episode"
              className="w-8"
              onTouchEnd={() => navigate(`/${Paths.RANDOM}`)}
            />
            <div className="flex">
              <img
                src="/assets/images/laugh.svg"
                alt="laugh episode"
                className="w-8"
                onTouchEnd={() => navigate(`/${Paths.RANDOM_LAUGH}`)}
              />
              <img
                src="/assets/images/crying.svg"
                alt="cry episode"
                className="w-8"
                onTouchEnd={() => navigate(`/${Paths.RANDOM_CRY}`)}
              />
              <img
                src="/assets/images/smile.svg"
                alt="smile episode"
                className="w-8"
                onTouchEnd={() => navigate(`/${Paths.RANDOM_SMILE}`)}
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[30%] w-[47%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm boerder-solid border-black border-4 mb-1 mr-1">
          <img
            src={episode?.image_url}
            alt={episode?.title}
            className="h-full w-full object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
