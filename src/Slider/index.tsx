import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import { EpisodeType } from "../types";

function Slider({ episode }: { episode: EpisodeType }) {
  return (
    <Swiper
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
      }}
      centeredSlidesBounds={false}
      modules={[Parallax, Pagination, Navigation]}
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

      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 1
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 2
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 3
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
