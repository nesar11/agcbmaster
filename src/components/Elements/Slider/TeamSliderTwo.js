import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle'
import Link from 'next/link';

class TeamSliderTwo extends Component {

    render() {

        return (
            <div className="team-active swiper-container">
                  <div className="kteam swiper-slide mb-30">
                    <div className='col-sm-4 m-auto'>
                            <div className="kteam-img">
                                        <img src="assets/img/team/manager.webp" className="img-fluid" alt="team-img"/>
                             
                                        </div>
                                        <div className="kteam-text text-center">
                                        <h4 className="kteam-title"><Link href="/team-details"><a>ELLIE SYAHIRAH LIYANA MOHAMED SAID</a></Link></h4>
                                        <span className="uppercase">Business Development Manager</span>
                               </div>
                          </div>
                    </div>
                         
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
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay= {{
                        delay: 4000,
                        disableOnInteraction: true
                    }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // navigation={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/Ahsan.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>AHSAN ALI RASHEED</a></Link></h4>
                                <span className="uppercase">Senior Creative Media Executive</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/siysha.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>SITI AISYAH MD TAHIR</a></Link></h4>
                                <span className="uppercase">Personal Assistance of VP Finance</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/as-1.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>NORASMIRA PUJIONO</a></Link></h4>
                                <span className="uppercase">Shariah & Legal Compliance Executive</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/ahmad-new-1.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>AHMAD SYAQIRIN</a></Link></h4>
                                <span className="uppercase">Shariah Compliance Executive</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/team-img-5.jpg" className="img-fluid" alt="team-img"/>
                                <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>melinda albert</a></Link></h4>
                                <span className="uppercase">writter</span>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                </div>
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
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        }
                    }}
                    autoplay= {{
                        delay: 4000,
                        disableOnInteraction: true
                    }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // navigation={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/syad.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>SYADZUAN ALIFF</a></Link></h4>
                                <span className="uppercase">Finance Executive</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/naj.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>MUHAMMAD NAJMUDDIN AZAD</a></Link></h4>
                                <span className="uppercase">Photo and Video Graphic Editor</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/Hikmatul.jpg" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>MUHAMMAD HIKMATUL KHALIDAH</a></Link></h4>
                                <span className="uppercase">DIGITAL MARKETING EXECUTIVE</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/amalina.webp" className="img-fluid" alt="team-img"/>
                                {/* <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div> */}
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>AMALINA HASSAN</a></Link></h4>
                                <span className="uppercase">Web and Mobile Developer</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <div className="kteam swiper-slide mb-30">
                            <div className="kteam-img">
                                <img src="assets/img/team/team-img-5.jpg" className="img-fluid" alt="team-img"/>
                                <div className="kteam-img-social">
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'twitter']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'facebook']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></i></a>
                                    <a href="#" target="_blank"><i><FontAwesomeIcon icon={['fab', 'instagram']} /></i></a>
                                </div>
                            </div>
                            <div className="kteam-text text-center">
                                <h4 className="kteam-title"><Link href="/team-details"><a>melinda albert</a></Link></h4>
                                <span className="uppercase">writter</span>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
                
            </div>
        );
    }
}

export default TeamSliderTwo;