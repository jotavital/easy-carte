import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../css/swiperStyles.css";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Zoom, Navigation, Thumbs } from "swiper";
import ProductImageSlide from "./ProductImageSlide";
import { Grid } from "@mui/material";

export default function ImageSliderWithThumbs({ mainImage, images }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Grid item>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                zoom
                modules={[FreeMode, Zoom, Navigation, Thumbs]}
                className="product-image-swiper"
            >
                {!mainImage && !images ? (
                    <SwiperSlide zoom>
                        <ProductImageSlide src="/img/no_picture_product.webp" />
                    </SwiperSlide>
                ) : mainImage ? (
                    <SwiperSlide zoom>
                        <ProductImageSlide src={mainImage} />
                    </SwiperSlide>
                ) : null}
                {images &&
                    images.map((image) => {
                        return (
                            <SwiperSlide key={image.id} zoom>
                                <ProductImageSlide src={image.path} />
                            </SwiperSlide>
                        );
                    })}
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
                {!mainImage && !images ? (
                    <SwiperSlide zoom>
                        <ProductImageSlide src="/img/no_picture_product.webp" />
                    </SwiperSlide>
                ) : mainImage ? (
                    <SwiperSlide zoom>
                        <ProductImageSlide src={mainImage} />
                    </SwiperSlide>
                ) : null}
                {images &&
                    images.map((image) => {
                        return (
                            <SwiperSlide key={image.id} zoom>
                                <ProductImageSlide src={image.path} />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </Grid>
    );
}
