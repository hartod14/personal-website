"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0} // No space between slides for seamless full-width
                slidesPerView={1} // Show one slide at a time
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <img
                        src="https://cdn-site.gojek.com/uploads/PUBGM_Desktop_Banner_52c1228f32.jpg"
                        alt="Slide 1"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <img
                            src="https://cdn-site.gojek.com/uploads/Desktop_Center_Image_7feea7e470.jpg"
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 w-2/3 flex items-center px-16">
                            <h1 className="text-white  text-6xl font-bold">Enjoy a variety of rewards especially for you here!</h1>
                            {/* <button className="font-semibold bg-green-600 py-2 px-3 rounded-2xl text-white">Scale with us</button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://cdn-site.gojek.com/uploads/Web_Header_Desktop_a827fd9720.jpg"
                        alt="Slide 3"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://cdn-site.gojek.com/uploads/J3_K_desktop_image_87a554b112.jpg"
                        alt="Slide 4"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
