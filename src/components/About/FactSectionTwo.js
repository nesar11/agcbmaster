import React, { Component } from 'react';

class FactTwo extends Component {

    render() {

        return (
        <section className="fact-area pb-85" style={{ backgroundImage:`url(${'assets/img/bg/fact-bg.jpg'})`}}>
            <div className="container">
                <div className="fun-fact text-center pb-80">
                    <span>Partners & Payment Method</span>
                </div>
            </div>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-sm-4">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/GA-Skylight-Banner-1.webp" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/logo-2.webp" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".9s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/awaris-1.webp" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".3s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/FPX-F-1.webp" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".6s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/MGA-011.webp" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".9s">
                            <div className="kfact-icon">
                                <i><img src="assets/img/icon/Uvendtech-Banner-4-1.webp" className="img-fluid" alt="fact-icon-img"/></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <div className="fun-fact text-center pb-50">
                    <span>INCUBATOR TENANT</span>
                </div>
            <div className="col-sm-4 m-auto">
                    <div className="kfact text-center mb-30 wow fadeInUp" data-wow-duration=".9s">
                        <div className="kfact-icon">
                            <i><img src="assets/img/icon/Uvendtech-Banner-4-1.webp" className="img-fluid" alt="fact-icon-img"/></i>
                        </div>
                    </div>
                </div>
        </div>


        </section>
        );
    }
}

export default FactTwo;