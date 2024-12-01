"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider2() {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20} // No space between slides for seamless full-width
                slidesPerView={2} // Show one slide at a time
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                className="w-full h-full px-16"
            >
                <SwiperSlide>
                    <div style={{ borderRadius: "60px" }}>
                        <img
                            src="https://cdn-site.gojek.com/uploads/62ac3b0465bd61d4f71f1920238467bc_webp_1366_912_Slack_Image_1366x912_aa074976e0.webp"
                            alt="Slide 1"
                            style={{ borderRadius: "60px" }}
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end mb-8 ps-12">
                            <h1 className="text-white  text-2xl font-bold mb-3">Fly for work & fun</h1>
                            <h1 className="text-white  text-lg">Explore new offices, cultures, and a thousand islands!</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ borderRadius: "60px" }} className="w-full h-full relative">
                        <img
                            src="https://cdn-site.gojek.com/uploads/Slack_Image_1366x912_9ff18d7b2b.webp"
                            alt="Slide 2"
                            style={{ borderRadius: "60px" }}
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end mb-8 ps-12">
                            <h1 className="text-white  text-2xl font-bold mb-3">Free counselling</h1>
                            <h1 className="text-white  text-lg">We talk about mental health. This one’s for you and your family.</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ borderRadius: "60px" }}>
                        <img
                            src="https://cdn-site.gojek.com/uploads/0c6106ede99edb7281ac73e4bc5e8f4e_74737762b5.webp"
                            alt="Slide 3"
                            style={{ borderRadius: "60px" }}
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 flex flex-col justify-end mb-8 ps-12">
                            <h1 className="text-white  text-2xl font-bold mb-3">Parental insurance</h1>
                            <h1 className="text-white  text-lg">Subsidised health support for your parents.</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ borderRadius: "60px" }}>
                        <img
                            src="https://cdn-site.gojek.com/uploads/Slack_Image_1366_834d7aec02.webp"
                            alt="Slide 4"
                            style={{ borderRadius: "60px" }}
                            className="w-full h-full object-cover brightness-50"

                        />
                        <div className="absolute inset-0 flex flex-col justify-end mb-8 ps-12">
                            <h1 className="text-white  text-2xl font-bold mb-3">Wellness benefits</h1>
                            <h1 className="text-white  text-lg">We share the bills - health, mobile, internet and more.</h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
