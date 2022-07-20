import React, { Component } from 'react';
import ArticleLayout from '../Common/ArticleLayout';
import dinars from '../../sample-data/blog-posts/dinars.json';
import Breadcrumb from '../Common/Breadcrumb';
import PaginationSection from '../Common/Pagination';
import ProductDinarCard from '../Common/ProductDinarCard';


class ProductDinar extends Component {

    render() {
               return (
            <main>

                <section className="blog-2 pt-10 pb-115">
                    <div className="container">
                        <div className='row'>
                            {dinars && dinars.map((dinar, i) => (
                            <div key={i} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 mb-30">
                                <ProductDinarCard dinar={dinar} />
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

export default ProductDinar;