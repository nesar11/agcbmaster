import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const TeamSliderTwo = dynamic(() => import('../Elements/Slider/TeamSliderTwo'), {
    ssr: false
})

class TeamTwo extends Component {

    render() {

        return (
            <section className="team-area pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center'>Board of Directors (BOD)</h1>
                        <div className="col-12">

                            <div className='col-sm-4 m-auto'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/Dato-Ku3.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>DATO' KU JAAFAR KU SHAARI</a></Link></h4>
                                    <span className="uppercase">IChairman</span>
                                </div>
                            </div>

                            <div className='col-sm-4 m-auto'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/azam-1-1.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>MOHD NORAZAM DATO' MUHAMMAD</a></Link></h4>
                                    <span className="uppercase">President <br></br>Chief Executive Officer</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-8 m-auto d-flex'>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/manap.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>DATO' HAJI ABDUL MOIS HASHIM</a></Link></h4>
                                    <span className="uppercase ">VP of Corporate Strategy Planning</span>
                                </div>
                            </div>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/aida-1.webp" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>SUHAIDA ISMAYUDDIN</a></Link></h4>
                                    <span className="uppercase">VP of Finance</span>
                                </div>
                            </div>
                            </div>


                        <h1 className='text-center'>Our Management</h1>
                        <div className='col-lg-12 d-inline-flex'>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/hashim.png" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>DATO' HAJI ABDUL MOIS HASHIM</a></Link></h4>
                                    <span className="uppercase ">CEO's Assistant</span>
                                </div>
                            </div>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/azida.png" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>AZIDA ABD GHANI</a></Link></h4>
                                    <span className="uppercase">CEO Personal Assistant</span>
                                </div>
                            </div>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/asri.png" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>DATO' SERI ASRI YUSOFF</a></Link></h4>
                                    <span className="uppercase">Corporate Strategy Advisor To CEO</span>
                                </div>
                            </div>
                            <div className='d-flex flex-column pr-20'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/cmo.png" className="img-fluid" alt="team-img" />
                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>R.V GANESH PRAKASH</a></Link></h4>
                                    <span className="uppercase">Chief Marketing Officer</span>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-center'>Shariah Advisory Panel (SAP)</h1>
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


                        <div className="col-12">

                            <div className='col-sm-4 m-auto'>
                                <div className="kteam-img">
                                    <img src="assets/img/team/dato-2.webp" className="img-fluid" alt="team-img" />

                                </div>
                                <div className="kteam-text text-center">
                                    <h4 className="kteam-title"><Link href="/team-details"><a>PROF. ADJUNCT DATO’ AHMAD SARUJI ABDUL AZIZ</a></Link></h4>
                                    <span className="uppercase">Independent Public Trustee</span>
                                </div>

                            </div>



                            <div className="section-title-wrapper text-center mb-50">
                                <h1 className="section-title mb-35">Our Corporate Team</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="team-active2 swiper-container">
                        <TeamSliderTwo />
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamTwo;