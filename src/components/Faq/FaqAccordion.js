
import React, { Component } from 'react';
import Link from 'next/link';

class FaqAccordion extends Component {

    render() {

        return (
        <section className="faq-area pt-120 pb-100 bg-grey fix">
            <div className="container z-index">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="faq-wrapper">
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample">
                                    
                                    
   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="faq-wrapper-2">
                            <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                <div className="accordion" id="accordionExample2">


                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general" type="button" role="tab" aria-controls="general" aria-selected="true">Genral</button>
                                    
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="storage-tab" data-bs-toggle="tab" data-bs-target="#storage" type="button" role="tab" aria-controls="storage" aria-selected="false">Store</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="trading-tab" data-bs-toggle="tab" data-bs-target="#trading" type="button" role="tab" aria-controls="trading" aria-selected="false">Trading Platform</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="reward-tab" data-bs-toggle="tab" data-bs-target="#reward" type="button" role="tab" aria-controls="reward" aria-selected="false">Rewad Points</button>
                                    </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                When was AGCB established?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Founded in 2020, AGCB aims to transform the modern economic system into the Islamic Economic system based on fairness, sustainability, and free of interest (Riba). ACGB too is a leading technology-based organization providing blockchain-powered Islamic hybrid finance which is led by a team of visionaries. Al-Ebreiz is headquartered in Kuala Lumpur, Malaysia with plans already in place for expansion into Singapore, Indonesia, and the Middle East.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                               What is AlaDeen Gold?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>AlaDeenGold is a new way to own and trade gold via a digital application built to provide the most secure without any inconvenience of physical storage and security for gold, represented with physical gold and is used as a value of exchange. These apps were designed with users in mind, providing a safe and great trading experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                               What is AlaDeen Gold?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>The AlaDeen Gold application is available on Android and iOS. 
                                                    For Android:

                                                    <ul> <li>Open the Google Play Store website or the Google Play Store on your Android smartphone</li>
                                                    <li>Search for “AlaDeen Gold Wallet” </li>
                                                    <li>Tap “Install”</li>
                                                    <li>Review the requested permissions and select “OK”</li>
                                                    <a href="https://play.google.com/store/apps/details?id=io.aladeen.trader"> <li>Click Here To Download From Play Store</li></a>  
                                                    
                                                    </ul>

                                                    For iOS:

                                                    <ul>
                                                        <li> Open the App Store</li>
                                                        <li>Search for “AlaDeen Gold Wallet”</li>
                                                        <li>     Tap “Get””</li>
                                                        <li> Review the requested permissions and select “OK”</li>
                                                      <a href="https://apps.apple.com/my/app/aladeen-gold-wallet/id1573265523"><li> Click Here To Download From App Store </li> </a>
                                                         </ul>
                                                        
                                                       
                                                    
                                               
                                                   
                                                    Click Here To Download From App Store</p>
                                            </div>
                                        </div>
                                    </div>
                                        {/* General end */}
                                    </div>
                                    <div class="tab-pane fade" id="storage" role="tabpanel" aria-labelledby="storage-tab">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                How To Organize Product-Related Assets?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Web fonts are often terrible for web performance and none of the font loading strategies are particularly effective to address that. Upcoming font options may finally deliver on the promise.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    <div class="tab-pane fade" id="trading" role="tabpanel" aria-labelledby="trading-tab">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                How To Boost Media Performance On A Budget?
                                            </button>
                                        </h2>
                                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                            </div>
                                        </div>
                                    </div>

                                    </div>
                                    <div class="tab-pane fade" id="reward" role="tabpanel" aria-labelledby="reward-tab">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEleven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                How To Make More Money Selling Shopify?
                                            </button>
                                        </h2>
                                        <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionExample2">
                                            <div className="accordion-body">
                                                <p>Front-end and design are remarkably complex these days. That’s why we invite kind, smart folks from the community to run online workshops for all of us to learn together. And we have new ones.</p>
                                            </div>
                                        </div>
                                    </div>


                                    </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default FaqAccordion;