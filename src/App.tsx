import { useEffect, useState } from "react";
import { EpisodeType, Status } from "./types";
import { Paths, baseUrl } from "./constansts";
import Slider from "./Slider";

function App() {
  const [episode, setEpisode] = useState<EpisodeType>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<Status>(Status.INIT);

  const getData = async (path: Paths) => {
    try {
      setStatus(Status.LOADING);
      const url = `${baseUrl}/${path}`;
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
    getData(Paths.RANDOM);
  }, []);

  return (
    <div>
      <div className="relative w-screen h-screen">
        <img
          src="src/assets/images/desktop.webp"
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
            src="src/assets/images/random.svg"
            alt="random episode"
            className="w-8 animate-custom-bounce"
            onTouchEnd={() => getData(Paths.RANDOM)}
          />
          <p className="font-bold text-white mt-4 mb-2">
            O prioriza tus sentimientos
          </p>
          <div className="flex w-2/3 justify-around">
            <img
              src="src/assets/images/laugh.svg"
              alt="laugh episode"
              className="w-8 cursor-pointer"
              onTouchEnd={() => getData(Paths.RANDOM_LAUGH)}
            />
            <img
              src="src/assets/images/crying.svg"
              alt="cry episode"
              className="w-8 cursor-pointer"
              onTouchEnd={() => getData(Paths.RANDOM_CRY)}
            />
            <img
              src="src/assets/images/smile.svg"
              alt="smile episode"
              className="w-8 cursor-pointer"
              onTouchEnd={() => getData(Paths.RANDOM_SMILE)}
            />
          </div>
        </div>
      </div>
      <Slider episode={episode!} status={status} />
    </div>
  );
}

export default App;
