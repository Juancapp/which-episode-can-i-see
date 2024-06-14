import { useEffect, useState } from "react";
import { EpisodeType } from "./types";
import { Paths, baseUrl, validPaths } from "./constansts";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "./Slider";

enum Status {
  INIT = "init",
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}

function App() {
  const [episode, setEpisode] = useState<EpisodeType>();

  const { pathname: path } = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>(Status.INIT);

  const getData = async () => {
    try {
      setStatus(Status.LOADING);
      const url = `${baseUrl}/${Paths.RANDOM}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Error");
      }

      const data = await res.json();
      console.log(data);

      setStatus(Status.SUCCESS);
      setEpisode(data);
    } catch (error) {
      setStatus(Status.ERROR);
      alert(error);
    }
  };

  useEffect(() => {
    if (validPaths.some((validPath) => `/${validPath}` === path)) {
      getData();
    }
  }, [path]);

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
          <div className="flex flex-col items-center gap-10">
            <img
              src="/assets/images/random.svg"
              alt="random episode"
              className="w-8"
              onTouchEnd={() => navigate(`/${Paths.RANDOM}`)}
            />
            <div className="flex w-full justify-around">
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
        <Slider episode={episode!} />
      </div>
    </div>
  );
}

export default App;
