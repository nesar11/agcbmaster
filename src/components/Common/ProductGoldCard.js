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

        <div className="col-lg-8 col-md-8" style={{ boxshadow: ' 8px 6px 5px 0px rgba(181,173,173,0.75)' }}>
            <div className="kproject kproject-2 mb-30">
                <img src={'/' + gold.image} alt="blog image" className="img-fluid" />
                <div className="kproject-text kproject-text-2">
                    <div className="kproject-text-content">
                        <p>{gold.weight}</p>
                        <span>{gold.name}</span>
                        
                    </div>
                    <div className="kproject-text-icon">
                       
                        <Link href="/project-details"><a><i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></a></Link>
                    </div>
                </div>
            </div>
            <div className="">

           <Link href={gold.url}><a className='theme-btn border-btn'><i> View<FontAwesomeIcon icon={['fas', 'chevron-right']} /></i></a></Link>
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