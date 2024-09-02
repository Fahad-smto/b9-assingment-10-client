import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import '../../App.css'
import "swiper/css/bundle";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div className="mt-5 md:w-full lg:w-[900px] mx-auto">


            <Swiper className="mySwiper" spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}


            >
                <SwiperSlide>
                    <div className="slide slide1 h-14">
                        <h1 className="font-bold text-white md:text-center  p-20 ">Travel is the gateway to discovering new cultures, breathtaking landscapes, and enriching experiences that broaden your horizons.</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2 ">
                        <h1 className="font-bold text-white md:text-center  p-20 ">
                        Exploring new destinations through travel rejuvenates the spirit, offering endless opportunities to experience the extraordinary in every corner of the globe.
                        </h1>
                    </div>
                </SwiperSlide>

                <SwiperSlide><div className="slide slide3">
                   <h1 className="font-bold text-white md:text-center  p-20 ">Journeying to new destinations invites adventure, self-discovery, and the thrill of encountering the world's wonders</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide4">
                 <h1 className="font-bold text-white md:text-center  p-20 ">Discovering the world allows for endless opportunities to learn, grow, and immerse yourself in the beauty of diverse cultures and landscapes.</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide5">
                   <h1 className="font-bold text-white md:text-center  p-20 ">
                   Exploring new places offers a chance to discover diverse cultures, breathtaking landscapes, and unforgettable experiences.
                   </h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide6">
                  <h1 className="font-bold text-white md:text-center  p-20 " >Venturing into unknown destinations brings the joy of discovery, personal growth, and a deeper connection with the world.</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide7">
                  <h1 className="font-bold text-white md:text-center  p-20 ">Journeying to new destinations invites adventure, self-discovery, and the thrill of encountering the world's wonders</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide8">
                   <h1 className="font-bold text-white md:text-center  p-20 ">Embarking on journeys to unfamiliar places opens doors to new perspectives, cultural exchanges, and life-changing experiences</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide9">
                     <h1 className="font-bold text-white md:text-center  p-20 ">Experiencing the world's vastness inspires awe, deepens understanding, and fosters connections that transcend borders</h1>
                </div></SwiperSlide>
                <SwiperSlide><div className="slide slide10">
                  <h1 className="font-bold text-white md:text-center  p-20 ">Venturing beyond familiar surroundings sparks curiosity and leads to unforgettable encounters with nature and people.</h1>
                </div></SwiperSlide>
            </Swiper>






        </div>
    );
};

export default Slider;