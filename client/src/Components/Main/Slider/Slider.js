import React from "react";
import Slider from "react-slick";
import '../../../Styles/slider/Slider.css'
import SliderPhoto1 from "../../../Assets/Images/slider_photo1.jpg";
import SliderPhoto2 from "../../../Assets/Images/slider_photo2.jpg";
import SliderPhoto3 from "../../../Assets/Images/slider_photo3.jpg";

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

        return (
            <div className="slider-wrapper">
                <Slider {...settings}>
                    <div>
                        <img className="slider-photo" alt={"promo-slider"} src={SliderPhoto1}/>
                    </div>
                    <div>
                        <img className="slider-photo" alt={"promo-slider"} src={SliderPhoto2}/>
                    </div>
                    <div>
                        <img className="slider-photo" alt={"promo-slider"} src={SliderPhoto3}/>
                    </div>
                </Slider>
            </div>
        );
    }
}