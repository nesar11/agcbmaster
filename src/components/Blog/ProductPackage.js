import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import packs from '../../sample-data/blog-posts/packs.json';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';
import ProductPackageCard from '../Common/ProductPackageCard';


class ProductPackage extends Component {

    render() {
               return (
            <main>

                <section className="blog-2 pt-10 pb-115">
                    <div className="container">
                        <div className='row'>
                            {packs && packs.map((pack, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 mb-30">
                                <ProductPackageCard pack={pack} />
                            </div>
                            ))}
                        </div>
                        <PaginationSection />
                    </div>
                </section> 
        	</main>
        );
    }
}

export default ProductPackage;