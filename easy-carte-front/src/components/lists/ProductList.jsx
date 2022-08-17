import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { apiClient } from "../../providers/apiClient";
import ProductCard from "../cards/ProductCard";
import CustomLoading from "../misc/CustomLoading";
import CategoriesListWithIcon from "./CategoriesListWithIcon";
import { useSearchParams } from 'react-router-dom';
import ProductModal from '../modals/ProductModal';

function ProductList({ restaurantId }) {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState({});
    const [areProductsLoaded, setAreProductsLoaded] = useState(false);
    const [areCategoriesLoaded, setAreCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productDataForModal, setProductDataForModal] = useState(null);

    const handleOpenModal = (productId) => {
        apiClient.get('products/' + productId)
            .then(({ data }) => {
                console.log(data);
                setProductDataForModal(data);
                setIsModalOpen(true);
            });
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setProductDataForModal(null);
        }, 100);
    }

    useEffect(() => {
        apiClient.get('/restaurants/' + restaurantId + '/products?category=' + searchParams.get('category'))
            .then(({ data }) => {
                setProducts(data);
                setAreProductsLoaded(true);
            });

        apiClient.get('/restaurants/' + restaurantId + '/product-categories')
            .then(({ data }) => {
                setCategories(data);
                setAreCategoriesLoaded(true);
            });
    }, [restaurantId, searchParams]);

    return (
        <Grid container item justifyContent='center' paddingY>
            <CategoriesListWithIcon categories={categories} areCategoriesLoaded={areCategoriesLoaded} />
            <Grid justifyContent='center' container item padding>
                {!areProductsLoaded
                    ?
                    <CustomLoading />
                    :
                    products.map((product) => {
                        return <ProductCard key={product.id} product={product} handleOpenModal={handleOpenModal} />
                    })
                }
            </Grid>
            <ProductModal open={isModalOpen} product={productDataForModal} handleCloseModal={handleCloseModal} />
        </Grid>
    );
}

export default ProductList;