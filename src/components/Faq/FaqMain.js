import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CtaTwo from '../HomeTwo/CtaTwoSection';
import FaqAccordion from './FaqAccordion';



class FaqMain extends Component {

    render() {

        return (
            <main>
                {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Faq" />
				{/* breadcrumb-end */}

                {/* faq-start */}
                <FaqAccordion />

        	</main>
        );
    }
}

export default FaqMain;