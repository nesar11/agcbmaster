import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductGoldCard = ({ gold }) => {

    return (
        // <div className="kblog" style={{boxShadow: "1px 3px 1px #9E9E9E" }}>
        //     <div className="kblog-img">
        //         <Link href={gold.url}>
        //             <img src={'/'+ gold.image} alt="blog image" className="img-fluid" />
        //         </Link>
        //     </div>
        //     <div className="kblog-text">
        //         <h5>{gold.name}</h5>
        //         <p>{gold.weight}</p>
        //         <div className="kblog-text-link btn">
        //              <Link href={gold.url}><a>{gold.button} <i><FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
        //         </div>
        //     </div>
        // </div>

        <div className="col-lg-8 col-md-8 col-xs-12" style={{ boxshadow: ' 8px 6px 5px 0px rgba(181,173,173,0.75)' }}>
            <div className="kproject-text-content  mb-30">
               <a href="https://shopee.com.my/alebreizglobal" target="_blank"> <img src={'/' + gold.image} alt="blog image" /></a>
            </div>
                <div className="kproject-text-content">
                    <div className="kproject">
                        <h3>{gold.weight}</h3>
                        <span>{gold.name}</span>

                    </div>
                </div>
            <div className="d-flex item-content-justify">
            <Link className="header-social" href="https://api.whatsapp.com/send?phone=601111335693"><a><i><FontAwesomeIcon icon={['fas', 'whatsapp-f']} /></i></a></Link>
                <Link href="https://api.whatsapp.com/send?phone=601111335693" target="_blank"><a className='btn'> WA</a></Link>
                <Link href="https://shopee.com.my/alebreizglobal" target="_blank"><a className='btn'> Buy</a></Link>
            </div>
            <style jsx>{`
                 .col-lg-8, .col-md-8 {
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
            padding: 10px;

        }
         `}</style>
        </div>


    );
}

export default ProductGoldCard;