"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";

export default function Slider3() {
    return (
        <div className="w-full">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20} // No space between slides for seamless full-width
                slidesPerView={4} // Show one slide at a time
                loop={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="w-full h-auto px-16"
            >
                <SwiperSlide>
                    <div className="bg-green-800 pb-5" style={{ borderRadius: "28px", height: "400px" }}>
                        <div style={{ borderRadius: "28px", height: "270px" }} className="bg-green-600 p-8 flex flex-col gap-5">
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gobox_horizontal_logo_white_03f344f3d2.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/goride_horizontal_logo_white_a2b9d20d84.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gobluebird_horizontal_logo_white_97f0e532c4.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gosend_horizontal_logo_white_f53401da5e.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gocar_horizontal_logo_white_786624f7de.svg" alt="product" />
                        </div>
                        <div className="text-white px-5" style={{ borderRadius: "28px" }}>
                            <h3 className="font-black text-xl mt-4 text-center">Transport & Logistics</h3>
                            <p className="text-center text-sm">We’ve kinda done 13,000 trips between the earth and the moon.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-cyan-800 pb-5" style={{ borderRadius: "28px", height: "400px" }}>
                        <div style={{ borderRadius: "28px", height: "270px" }} className="bg-cyan-600 p-8 flex flex-col gap-5">
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gopay_horizontal_logo_white_257d535edd.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gosure_horizontal_logo_white_9aa83831d0.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gopaylater_horizontal_logo_white_4c5632c1ab.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gotagihan_horizontal_logo_white_41339237ce.svg" alt="product" />
                        </div>
                        <div className="text-white px-5" style={{ borderRadius: "28px" }}>
                            <h3 className="font-black text-xl mt-4 text-center">Payments</h3>
                            <p className="text-center text-sm">From deals to donations, we make transactions easy, reliable, and cashless.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-red-800 pb-5" style={{ borderRadius: "28px", height: "400px" }}>
                        <div style={{ borderRadius: "28px", height: "270px" }} className="bg-red-600 p-8 flex flex-col gap-5">
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gomed_horizontal_logo_white_0b7fdfd8ed.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/goshop_horizontal_logo_white_9ef721940a.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gofood_horizontal_logo_white_13c7a3f74e.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gomart_horizontal_logo_white_8d2c362daa.svg" alt="product" />
                        </div>
                        <div className="text-white px-5" style={{ borderRadius: "28px" }}>
                            <h3 className="font-black text-xl mt-4 text-center">Food & Shopping</h3>
                            <p className="text-center text-sm">Fill your cart with food, electronics, medicines, and more. Without stepping out!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-purple-800 pb-5" style={{ borderRadius: "28px", height: "400px" }}>
                        <div style={{ borderRadius: "28px", height: "270px" }} className="bg-purple-600 p-8 flex flex-col gap-5">
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gomed_horizontal_logo_white_0b7fdfd8ed.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/goshop_horizontal_logo_white_9ef721940a.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gofood_horizontal_logo_white_13c7a3f74e.svg" alt="product" />
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gomart_horizontal_logo_white_8d2c362daa.svg" alt="product" />
                        </div>
                        <div className="text-white px-5" style={{ borderRadius: "28px" }}>
                            <h3 className="font-black text-xl mt-4 text-center">Business</h3>
                            <p className="text-center text-sm">Manage your restaurants, run ads, create promos, and do more.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-pink-800 pb-5" style={{ borderRadius: "28px", height: "400px" }}>
                        <div style={{ borderRadius: "28px", height: "270px" }} className="bg-pink-600 p-8 flex flex-col gap-5">
                            <Image width={120} height={120} src="https://cdn-site.gojek.com/uploads/gotix_horizontal_logo_white_f6afb15e01.svg" alt="product" />
                        </div>
                        <div className="text-white px-5" style={{ borderRadius: "28px" }}>
                            <h3 className="font-black text-xl mt-4 text-center">Entertainment</h3>
                            <p className="text-center text-sm">Binge-watch your favorite series, book tickets, play games, have a good time!</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
