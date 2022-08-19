import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Zoom, Navigation, Thumbs } from "swiper";
import Image from "./Image"

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../css/swiperStyles.css";

export default function ImageSliderWithThumbs() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff"
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                zoom
                modules={[FreeMode, Zoom, Navigation, Thumbs]}
                className="product-image-swiper"
            >
                <SwiperSlide zoom>
                    <Image
                        wrapperClass='swiper-zoom-target'
                        src='https://swiperjs.com/demos/images/nature-1.jpg'
                        title='Clique duas vezes para ampliar'
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={5}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="product-thumb-swiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
