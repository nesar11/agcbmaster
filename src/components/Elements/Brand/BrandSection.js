import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle'

class Brand extends Component {

    render() {

        return (
            <div className="brand-area pt-100 pb-100">
                <div className="container">
                    <div className="brand-active swiper-container">
                        <div className="swiper-wrapper align-items-center">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2}
                                autoplaydisableoninteraction={"false"}
                                loop={true}
                                breakpoints={{
                                    550: {
                                        slidesPerView: 3,
                                      },
                                      768: {
                                        slidesPerView: 4,
                                      },
                                      1200: {
                                        slidesPerView: 5,
                                      }
                                }}
                                autoplay= {{
                                    delay: 2000,
                                    disableOnInteraction: true
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".3s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/GA-Skylight-Banner-1.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".6s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/logo-2.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay=".9s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/Awaris-1.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.2s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/FPX-f-1.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.5s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/MGA-011.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/Uvendtech-Banner-4-1.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="brand-wrapper swiper-slide wow fadeInUp" data-wow-delay="1.8s" data-swiper-autoplay="10000">
                                    <a href="#"><img src="assets/img/brand/Marnti-logo2.webp" className="img-fluid" alt="img"/></a>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Brand;