import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Parallax, Autoplay, Pagination, Navigation } from "swiper/modules";
import { EpisodeType } from "../types";
import { useEffect, useState } from "react";
import { translate } from "../helpers";

function Slider({ episode }: { episode: EpisodeType }) {
  const episodeNumber = episode?.code[4] + episode?.code[5];
  const [translatedEpisode, setTranslatedEpisode] = useState<string>("");

  useEffect(() => {
    translate(episode?.synopsis).then((res) => setTranslatedEpisode(res));
  }, [episode?.synopsis]);

  return (
    <Swiper
      speed={600}
      parallax={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="z-10 "
    >
      <div className="curtain"></div>
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

      <SwiperSlide>
        <h1 className="text-4xl font-bold" data-swiper-parallax="-300">
          EP {episodeNumber}
        </h1>
        <div className="text-2xl mt-2 font-bold" data-swiper-parallax="-200">
          S{episode?.season}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <h1 className="text-xl  font-bold" data-swiper-parallax="-300">
          Sinopsis
        </h1>
        <p className="text-sm mt-5" data-swiper-parallax="-100">
          {translatedEpisode}
        </p>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
