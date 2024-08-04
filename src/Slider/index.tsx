import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import {
  Parallax,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { EpisodeType, Status } from "../types";
import { useEffect, useRef, useState } from "react";
import { translate } from "../helpers";



function Slider({ episode, status }: { episode: EpisodeType; status: Status }) {
  const episodeNumber = episode?.code[4] + episode?.code[5];
  const [translatedEpisode, setTranslatedEpisode] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    translate(episode?.synopsis).then((res) => setTranslatedEpisode(res));
  }, [episode?.synopsis]);

  useEffect(() => {
    if (swiperRef?.current) {
      swiperRef.current?.swiper.slideTo(0);
    }
  }, [episode?.title]);

  return (
    <>
      <Swiper
        ref={swiperRef}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="z-10"
      >
        {episode?.image_url && (
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: `url(${episode?.image_url})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
        )}

        <div className="curtain"></div>

        <SwiperSlide>
          {status === Status.LOADING ? (
            <h1>Cargando... </h1>
          ) : status === Status.ERROR ? (
            <h1>Error</h1>
          ) : (
            <>
              <h1 className="text-4xl font-bold" data-swiper-parallax="-300">
                EP {episodeNumber}
              </h1>
              <div
                className="text-2xl mt-2 font-bold"
                data-swiper-parallax="-200"
              >
                S{episode?.season}
              </div>{" "}
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {status === Status.LOADING ? (
            <h1>Cargando... </h1>
          ) : status === Status.ERROR ? (
            <h1>Error</h1>
          ) : (
            <>
              <h1 className="text-xl  font-bold" data-swiper-parallax="-300">
                Sinopsis
              </h1>
              <p className="text-sm mt-5" data-swiper-parallax="-100">
                {translatedEpisode}
              </p>
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
