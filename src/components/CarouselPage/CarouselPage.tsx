import React from "react";
import './CarouselPage.css'
import Carousel from "nuka-carousel";

// let Decorators = [{
//     component: React.createClass({
//         render() {
//             return (
//                 <button
//                     onClick={this.props.previousSlide}>
//                     Previous Slide
//                 </button>
//             )
//         }
//     }),
//     position: 'CenterLeft',
//     style: {
//         padding: 20
//     }
// }];

const CarouselPage = () => {
    // @ts-ignore
    return (
        <div>
            <Carousel>
                <img
                    src="https://images.wallpaperscraft.com/image/car_city_street_133481_1920x1080.jpg"/>
                <img
                    src="https://images.wallpaperscraft.com/image/car_front_view_headlight_160776_1920x1080.jpg"/>
                <img
                    src="https://images.wallpaperscraft.com/image/car_headlight_white_162554_1920x1080.jpg"/>
                <img
                    src="https://images.wallpaperscraft.com/image/car_headlight_rear_view_161083_1920x1080.jpg"/>
                <img
                    src="https://images.wallpaperscraft.com/image/car_orange_headlight_159233_1920x1080.jpg"/>
                <img
                    src="https://images.wallpaperscraft.com/image/car_headlight_suv_163614_1920x1080.jpg"/>
            </Carousel>
        </div>
    );
}

export default CarouselPage;
