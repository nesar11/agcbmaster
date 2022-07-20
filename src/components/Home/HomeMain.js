import React, { Component } from 'react';
import Video from '../Elements/Video/VideoSection';
import About from './AboutSection';
import Cta from './CtaSection';
import Service from './ServiceSection';
import dynamic from 'next/dynamic';
const HomeSlider = dynamic(() => import('../Elements/Slider/HomeSliderSection'), {
    ssr: false
  })
const Testimonial = dynamic(() => import('../Elements/Testimonials/TestimonialsSection'), {
    ssr: false
  })
const Brand = dynamic(() => import('../Elements/Brand/BrandSection'), {
    ssr: false
})
import Trust from './TrustSection';
import Quality from './QualitySection';
import Map from './MapSection';
import Project from './ProjectSection';
import State from './StateSection';
import FactTwo from '../About/FactSectionTwo';
const BlogSlider = dynamic(() => import('../Elements/Slider/BlogSliderSection'), {
    ssr: false
})

class HomeMain extends Component {

    render() {

        return (
            <main>
	            {/* slider-start */}
				<HomeSlider />
				{/* slider-end */}

                {/* service-start */}
				<Service />
				{/* service-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}

                {/* about-start */}
				<About />
				{/* about-end */}

                {/* project-start */}
				<Project />
				{/* project-end */}

                {/* video-start */}
				<Video />
				{/* video-end */}

                {/* testimonial-start */}

                {/* brand-start */}
				<Brand />
				{/* brand-end */}

                {/* trust-start */}
				<Trust />
				{/* trust-end */}

                {/* blog-start */}
				<BlogSlider />
				{/* blog-end */}

      			<FactTwo />
				{/* FactTwo-end */}
				
				<Quality />
				{/* quality-end */}

           

        	</main>
        );
    }
}

export default HomeMain;