import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { apiClient } from "../../providers/apiClient";
import ProductCard from "../cards/ProductCard";
import CustomLoading from "../misc/CustomLoading";
import CategoriesListWithIcon from "./CategoriesListWithIcon";
import { useSearchParams } from "react-router-dom";
import ProductModal from "../modals/ProductModal";
import Empty from "../Empty";

function ProductList({ restaurantId }) {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState({});
    const [areProductsLoaded, setAreProductsLoaded] = useState(false);
    const [areCategoriesLoaded, setAreCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productDataForModal, setProductDataForModal] = useState(null);

    const handleOpenModal = (productId) => {
        apiClient
            .get("products/" + productId + "?withimages=1")
            .then(({ data }) => {
                setProductDataForModal(data);
                setIsModalOpen(true);
            });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setProductDataForModal(null);
        }, 100);
    };

    useEffect(() => {
        apiClient
            .get(
                "/restaurants/" +
                    restaurantId +
                    "/products?category=" +
                    searchParams.get("category")
            )
            .then(({ data }) => {
                setProducts(data);
                setAreProductsLoaded(true);
            });
    }, [restaurantId, searchParams]);

    useEffect(() => {
        apiClient
            .get("/restaurants/" + restaurantId + "/product-categories")
            .then(({ data }) => {
                setCategories(data);
                setAreCategoriesLoaded(true);
            });
    }, [restaurantId]);

    return (
        <Grid>
            <CategoriesListWithIcon
                categories={categories}
                areCategoriesLoaded={areCategoriesLoaded}
            />
            {!areProductsLoaded ? (
                <CustomLoading />
            ) : !products.length ? (
                <Empty />
            ) : (
                <Grid
                    container
                >
                    {products.map((product) => {
                        return (
                            <Grid item xs={6}>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    handleOpenModal={handleOpenModal}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            )}
            <ProductModal
                open={isModalOpen}
                product={productDataForModal}
                handleCloseModal={handleCloseModal}
            />
        </Grid>
    );
}

export default ProductList;
