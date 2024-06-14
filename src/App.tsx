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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setStatus] = useState<Status>(Status.INIT);

  const getData = async () => {
    try {
      setStatus(Status.LOADING);
      const url = `${baseUrl}/${Paths.RANDOM}`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Error");
      }

      const data = await res.json();

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
    } else if (path === "/") {
      navigate("/randomize");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div>
      <div className="relative w-screen h-screen">
        <img
          src="assets/images/desktop.webp"
          className="absolute object-cover w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <h1
          className="font-custom text-white text-3xl text-center px-10 top-28 z-10 absolute
          "
          style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)" }}
        >
          ¿Qué episodio puedo ver?
        </h1>
        <div className="flex flex-col w-full items-center gap-2 z-10 absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-[90%]">
          <img
            src="/assets/images/random.svg"
            alt="random episode"
            className="w-8 animate-custom-bounce"
            onTouchEnd={() => navigate(`/${Paths.RANDOM}`)}
          />
          <p className="font-bold text-white mt-4 mb-2">
            O prioriza tus sentimientos
          </p>
          <div className="flex w-2/3 justify-around">
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
  );
}

export default App;
