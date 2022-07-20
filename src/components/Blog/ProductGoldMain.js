import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import ProductTabTwo from '../Elements/Tab/ProjectTabTwo';


class ProductGoldTabMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Projects" />
				{/* breadcrumb-end */}

                {/* service-start */}
                <ProductTabTwo />
				{/* service-end */}

        	</main>
        );
    }
}

export default ProductGoldTabMain;