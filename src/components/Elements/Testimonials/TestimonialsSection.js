import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css/bundle'

class Testimonial extends Component {

    render() {

        return (
            <section className="testimonial-area pt-105 pb-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        </div>
                    </div>

                    <div className="testimonial-active swiper-container">
                        <div className="swiper-wrapper">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplaydisableoninteraction={"false"}
                                loop={true}
                                breakpoints={{
                                    480: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        },
                                        1400: {
                                            slidesPerView: 3
                                        }
                                    }}
                                    autoplay= {{
                                        delay: 5000,
                                        disableOnInteraction: true
                                    }}
                                // pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                // navigation={{ clickable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <h2>Vission</h2>
                                        <p>To become the leading technology-based organization, providing blockchain-powered Islamic hybrid finance solutions to the World.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <h2>Mission</h2>
                                        <p>To demonstrate services to our customers by financial solutions that are profitable, convenient, and Shariah-compliant.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="ktestimonial mb-30 swiper-slide">
                                    <div className="ktestimonial-text">
                                        <h2>Core Purpose</h2>
                                        <p>Giving opportunities to our customers in achieving their financial goals in accordance to Islamic financial principles</p>
                                    </div>
     
                                </div>
                            </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;