import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductPackageCard = ({pack}) => {

    return (


        <div className="col-lg-8 col-md-8" style={{ boxshadow:"0 4px 8px, rgba(0, 0, 0, 0.15)" }}>
            <div className="kproject kproject-2 mb-30">
                <img src={'/' + pack.image} alt="blog image" className="img-fluid" />
                <div className="kproject-text kproject-text-2">
                    <div className="kproject-text-content">
                        <p>{pack.weight}</p>
                        <span>{pack.name}</span>
                        
                    </div>
                    <div className="kproject-text-icon">
                       
                        <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                    </div>
                </div>
            </div>
            <div className="">

        <Link href={pack.id}><a className='theme-btn border-btn'><i> View<FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link> 
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

export default ProductPackageCard;