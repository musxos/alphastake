import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export function Projects() {
  return (
    <section className="min-h-screen bg-white py-32 flex items-center justfiy-center">
      <div className="container mx-auto h-full flex flex-col items-center justify-center w-full px-2">
        <Swiper slidesPerView={3} spaceBetween={24} breakpoints={
            {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        } className="w-full">
            <SwiperSlide className="h-full">
                <div className="flex items-center justify-center w-full h-96 lg:w-[512px] lg:h-[512px] bg-black rounded-[20px] p-12">
                    <img src="dynaswap.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-full"> 
                <div className="flex items-center justify-center  w-full h-96 lg:w-[512px] lg:h-[512px] bg-black rounded-[20px] p-12">
                    <img src="samuraiconquest.png" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <div className="flex items-center justify-center w-full h-96 lg:w-[512px] lg:h-[512px] bg-black rounded-[20px] p-12 text-white text-6xl">
                    Coming Soon
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <div className="flex items-center justify-center w-full h-96 lg:w-[512px] lg:h-[512px] bg-black rounded-[20px] p-12 text-white text-6xl">
                    Coming Soon
                </div>
            </SwiperSlide>
            <SwiperSlide className="h-full">
                <div className="flex items-center justify-center w-full h-96 lg:w-[512px] lg:h-[512px] bg-black rounded-[20px] p-12 text-white text-6xl">
                    Coming Soon
                </div>
            </SwiperSlide>
        </Swiper>
        <h1 className="text-6xl lg:text-[160px] text-center text-black font-bold mt-24">ALPHASTAKE LABS</h1>
      </div>
    </section>
  );
}
