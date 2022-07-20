import React, { Component } from 'react';

class FactTwo extends Component {

    render() {

        return (
        <section className="fact-area pb-85" style={{ backgroundImage:`url(${'assets/img/bg/fact-bg.jpg'})`}}>
            <div className="container">
                <div className="fun-fact text-center pb-80">
                    <span>Our fun facts</span>
                </div>
            </div>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-1.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">1700+</h2>
                            <span>Total AlaDeen Subscribers</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-2.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">14000+ g</h2>
                            <span>Total Gold Subscribers</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".9s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-3.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">12000</h2>
                            <span>Total Silver Subscribers</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="kfact kfact-last-child text-center mb-30 wow fadeInUp" data-wow-duration="1s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/fact-icon-4.png" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                            <h2 className="kfact-title counter">1845</h2>
                            <span>Total Dinar Subscribers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default FactTwo;