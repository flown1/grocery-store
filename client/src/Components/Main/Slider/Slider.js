import React from "react";
import Slider from "react-slick";
import '../../../Styles/slider/Slider.css'

export default class FeaturedSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        //this component should fetch for sliders photos

        return (
            <div className="slider-wrapper">
                <Slider {...settings}>
                    <div>
                        <img className="slider-photo" src="https://powerscourtgardenpavilion.com/wp-content/uploads/sites/2/shutterstock_126744203.jpg"/>
                    </div>
                    <div>
                        <img className="slider-photo" src="https://cdn.images.express.co.uk/img/dynamic/13/590x/Alan-Titchmarsh-grading-tips-apple-tree-harvest-835162.jpg"/>
                    </div>
                    <div>
                        <img className="slider-photo" src="https://pixfeeds.com/images/fruits-vegetables/carrots/1200-470332802-carrots-growing.jpg"/>
                    </div>
                </Slider>
            </div>
        );
    }
}