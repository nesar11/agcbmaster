import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Mission extends Component {

    render() {

        return (
        <section className="mission-area pt-120 fix">
            <div className="container">
                    <div className='col-sm-3 m-auto'>
                       <img src="assets/img/about/AGCB-LOGO-3.webp" className="img-fluid" alt="team-img"/>
                    </div>
                    <div className='col-sm-12 p-35'>
                    <br></br><h5 className="section-subtitle mb-20">get to know us</h5>
                    <h1 className="section-title mb-35">Al-Ebreiz Global Capital Berhad</h1>

                    </div>
                
                <div className="row">

                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                            <div className="section-title-wrapper mb-25">
                                <h4>Illustrated By:</h4>
                                <p>Prof. Dato’ Dr. Ahamed Kameel Mydin Meera</p>
                                <h4>Designed By::</h4>
                                <p>Mohd Norazam Dato’ Muhammad</p>
                                <h3>Al-Ebreiz  الابريز  "Purest Gold"</h3>
                                <p>Al-Ebreiz - The meaning is so clearly abstract into the meaning of the natural purest gold that was obtained without any chemical process. What is the translation of "Purest Gold" in the Arabic Language?

                                    - Ad-dhahab | Al-Khalis | الذهب الخالص

                                    - Or | Ad-dhahab | Al-Ebreiz | الذهب الابريز

                                    - Or simply | Al-Ebreiz | الابريز

                                    The Ebreiz is the natural purest gold that was obtained without any chemical process. In another meaning from chemistry terms, it means pure gold. But in Arabic, a person is like pure gold which means a pure and noble person with strong moral principles, integrity, reliability, honesty, and sincerity with great personal qualities and high standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                            <img src="assets/img/about/about-6.png" className="img-fluid" alt="about-img"/>
                            {/* <div className="mission-img-text">
                                <h4>We’re committed to
                                    trusted Agency
                                </h4>
                                <Link href="/project"><a>Get Started</a></Link>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            <div className="col-lg-10 mb-55 ">
                            <div className='d-inline-flex '><h4 > Gold and Silver Color</h4></div>
                            <p >
                            The main gold and silver colors depict both AGCB’s “obsession” with gold and silver metals. Gold and silver as precious metals played the role of money and as a measure of value in domestic and international trades in most civilizations for most of human history. Gold ceased to play that role completely only since 1971, after the collapse of the Bretton Woods system when the US dollar was deemed not redeemable anymore for gold by the Federal Reserve. Gold, however, has always been and still is a Shariah money. In the current world of economic and political turbulence, AGCB aspires to return gold and silver back as the global monetary standards, using modern technologies, so as to render and contribute towards just, stable and sustainable monetary and economic systems. 
                            </p>
                            <h4>  The Islamic Design</h4>
                            <p>Represents that AGCB’s system is Shariah-compliant and hence should appeal to both Muslims and non-Muslims alike.</p>
                            <h4 > Centre Circular Islamic Design </h4>
                            <p>The circular design depicts the links between businesses, individuals, organizations and the government that form an economic ecosystem. AGCB’s non-interest, gold-based payment system connects all the players using gold as the measure of value for economic exchange. In this regard, gold also represents other possible real monies like silver, petroleum, palm oil, etc.</p>
                            <h4>  The Gold Circle</h4>
                            <p >The gold circle represents the gold coin that played the role of money in many civilizations. In Islamic civilization, it was the gold dinar, a name derived from the Roman gold coin, the denarius.</p>
                            <h4 > The Inner Square</h4>
                            <p> Represents the Ka’ba that unifies all cultures into oneness in direction.</p>
                            <h4 >The Outer Square Vertices</h4>
                            <p> Represent the mission of AGCB in order to achieve its vision.</p>
                            <h4>  Black Background & Centre Brightness</h4>
                            <p> Represent the current age of darkness, AGCB’s initiatives are expected to brighten the lives of all people and thereby by bring peace, happiness and abundant prosperity to humanity.</p>
                            <h4 > The Round Symmetrical Structure</h4>
                            <p>Represents Economic Justice that can be expected from AGCB’s system. From engineering perspective, such structure is also stable and sustainable, i.e. the characteristics the economic system would gain from AGCB’s system.</p>
                            
                            <p> There is a Hadith of the Prophet SAW which said that: "Allah SWT may test persons with difficulties and compare it with the process of testing the purity of gold." <br />
قال رسول الله صلى الله عليه وآله وسلم : إن الله ليجرب أحدكم بالبلاء وهو أعلم به كما يجرب أحدكم ذهبه بالنار ، فمنهم من يخرج كالذهب الإبريز فذلك الذي نجاه الله تعالى من السيئات ، ومنهم من يخرج كالذهب دون ذلك فذلك الذي يشك بعض الشك ، ومنهم من يخرج كالذهب الأسود فذلك الذي قد افتتن
(Sahih Al-Bukhary and Sahih Muslim)</p>

                                
                            </div>
                            
            </div>
        </section>
        );
    }
}

export default Mission;