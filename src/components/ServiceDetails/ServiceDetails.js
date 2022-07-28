import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ServiceDetails extends Component {

    render() {

        return (
            <section className="service-detals pt-120 pb-100 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 ">
                            <div className="develop-wrapper">
                                <div className="develop-content">
                                    <h3 className="service-title">AGCB TOWARDS SHARIAH PRINCIPLES</h3>
                                    <p>Al Ebreiz Global Capital Berhad (AGCB) is officially a Shariah-Compliant company as of 21st November 2020. AGCB has obtained the Shariah Compliance certification from Shariah Advisory Panel (SAP) to ensure that all matters related to trading, transactions, and business are in accordance with Shariah principles.

                                        This certification officially verifies that AGCB complies with Malaysian recognized Shariah requirements with the guidelines set by Securities Commission Malaysia (SC) and Bank Negara Malaysia (BNM).

                                        Being a Shariah-Compliant organization is a significant feat for us. It ensures AGCB’s technology-based platform maintains the high standards of operations and products and will continue to deliver substantial value to all stakeholders. In line with the mission and vision to be carried, AGCB wants to bring – “The Future of Islamic Hybrid Finance” aspirations to the international stage in the near future.</p>
                                </div>
                            </div>

                            <div className="planning-wrapper pt-50">
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="plan-thumb mb-md-40 mb-xs-40">

                                            <h4>MISSION</h4>
                                            <p>To become a fully integrated Shariah-Compliant Gold Trading Business, provide financial solutions to ensure all services according to the Shariah Principles and become a convenient platform for customers to purchase and sell gold.</p>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="plan-content">
                                            <h4>VISION</h4>
                                            <p>To provide our stakeholders with flexible and convenient Shariah-Compliant financial solutions.</p>
                                        </div>
                                    </div>

                                    <div className="col-xxl-12">
                                        <div className="plan-content pr-10 pt-50 pt-xs-30 pt-md-30 pb-15">
                                            <h2> Objectives</h2>
                                            <h5>Business management and operation must comply with Shariah standards.</h5><br></br>
                                            <h5>Spearhead and apply Shariah regulations in the management and operations of the gold trading business.</h5><br></br>
                                            <h5>Integration of Shariah Compliance in business practices against Riba..</h5><br></br>
                                            <h5>Provide financial solutions towards Islamic Hybrid Finance inline and guided by Shariah.</h5><br></br>
                                            <h5>Enrich resources of knowledge and understanding in Islamic finance perspective.</h5><br></br>
                                            <h5>Disseminate a harmonization amongst people and mutual respect in Islamic practices.</h5><br></br>
                                            <h5>Provide avenues for the development of Shariah practices.</h5><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='col-10 p-50'>
                            <h1>OUR SHARIAH ADVISORY PANEL (SAP)</h1>
                        </div>
                        <div className='col-lg-12 d-inline-flex'>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/ustaz-mohd-fadhli-imgjpg.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>USTAZ MOHD FADHLI MOHD FAUDZI</a></Link></h4>
                                    <span className="uppercase">Independent Public Trustee</span>
                                </div>
                            </div>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/ustaz-azizi-binjpg.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>USTAZ AZIZI CHE SEMAN</a></Link></h4>
                                    <span className="uppercase">Independent Public Trustee</span>
                                </div>
                            </div>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/ustaz-hamdan-bin-img.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>USTAZ HAMDAN ABDULLAH</a></Link></h4>
                                    <span className="uppercase">Independent Public Trustee</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 align-items-center'><br></br>
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div className="choose-right aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            What is Shariah Compliance?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Shariah Compliance means ensuring that the organisation is effectively managed in accordance with universally accepted values like discipline, honesty, justice, sincerity, timeliness, and truthfulness. The halal and non-halal aspects of all processes vital for delivering services and products must also be identified and communicated to all employees and implemented effectively.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What are the benefits that a company gains from being Shariah-Compliant?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Ensure that the universal values of justice, honesty, truthfulness, sincerity, timeliness, and discipline are integrated into your quality management practices.
                                                Place greater emphasis on ethical standards in business processes.
                                                Receive independent assurance that your organization's processes and practices are in accordance with Shariah principles.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            When did AGCB become Shariah-Compliant?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>AGCB officially received its Shariah Compliance Certificate on 21st November 2020.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What is the certification received by AGCB that verifies its Shariah-Compliant status?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>The certificate that AGCB received is to certify that Gold Trading Business Model Version 7.0 is followed by Shariah Standard based on <Link href="https://www.bnm.gov.my/" target="_blank">Bank Negara Malaysia (BNM) </Link> and <Link href="https://www.sc.com.my/" target="_blank">Securities Commission (SC).</Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How can a company maintain Shariah Compliance in the system?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>AGCB must ensure that they are continuously improving their business operations and values in accordance to Shariah principles, which will be ascertained by the Shariah Advisory Panel (SAP) through the approval of the business model.</p>
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

export default ServiceDetails;