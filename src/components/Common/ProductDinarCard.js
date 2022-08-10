import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductDinarCard = ({ dinar }) => {

    return (


        <div className="col-lg-8 col-md-8" style={{ boxshadow: "0 4px 8px, rgba(0, 0, 0, 0.15)" }}>
            <div className="kproject-text-content mb-30">
                 <a href="https://shopee.com.my/alebreizglobal" target="_blank"><img src={'/' + dinar.image} alt="blog image" className="img-fluid" /></a>

            </div>
            <div className="kproject-text-content">
                <div className="kproject">
                    <h4>{dinar.weight}</h4>
                    <span >{dinar.name}</span>

                </div>
            </div>
            <div className="">
                <Link href="https://api.whatsapp.com/send?phone=601111335693" target="_blank"><a className='btn'> WA</a></Link>
   
                <Link href="https://shopee.com.my/alebreizglobal" target="_blank"><a className='btn'> Buy</a></Link>
            </div>
            <style jsx>{`
        .col-lg-8, .col-md-8 {
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
            padding: 15px;

        }
         `}</style>
        </div>


    );
}

export default ProductDinarCard;