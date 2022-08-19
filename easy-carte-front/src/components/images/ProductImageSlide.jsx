import Image from "./Image";

function ProductImageSlide({ src }) {
    return (
        <Image
            wrapperClass='swiper-zoom-target'
            src={src}
            title='Clique duas vezes para ampliar'
        />
    );
}

export default ProductImageSlide;