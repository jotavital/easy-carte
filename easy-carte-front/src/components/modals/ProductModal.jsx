import { Grid, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import CustomAccordion from "../misc/CustomAccordion";
import ImageSliderWithThumbs from "../images/ImageSliderWithThumbs";
import CustomButton from "../buttons/CustomButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useContext } from "react";
import { useHelpers } from "../../contexts/helpers";
import QuantityPicker from "../forms/inputs/QuantityPicker";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../providers/apiClient";
import Empty from "../Empty";
import { useRestaurants } from "../../contexts/restaurants";
import { useUserLocation } from "../../contexts/userLocation";

function ProductModal({ open, handleCloseModal, product }) {
    const min = 1;
    const max = 5;
    const { convertToBrl } = useHelpers();
    const { isUserAtRestaurant } = useUserLocation();
    const [quantity, setQuantity] = useState(1);
    const { isUserAuthenticated, logout } = useContext(AuthContext);
    const { restaurantSettings } = useRestaurants();
    const navigate = useNavigate();

    const handleIncrement = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToOrder = () => {
        if (!isUserAuthenticated()) {
            return navigate("/login");
        }

        apiClient
            .post("/order-products", {
                product_id: product?.id,
                quantity: quantity,
            })
            .then((response) => {
                toast.success("Adicionado ao pedido");

                handleCloseModal();
            })
            .catch(({ response }) => {
                toast.error("Erro ao adicionar ao pedido");

                if (response.status === 401) {
                    logout();
                }
            });
    };

    return (
        <CustomModal
            title={product ? product.name : null}
            open={open}
            handleCloseModal={handleCloseModal}
            content={
                <Grid justifyContent="center" padding container>
                    {!product ? (
                        <Empty />
                    ) : (
                        <>
                            <Grid padding item xs={12} sm={6}>
                                <ImageSliderWithThumbs
                                    mainImage={product.main_image}
                                    images={product.images}
                                />
                            </Grid>
                            <Grid padding item sm={6}>
                                <Typography variant="h5">
                                    <strong>{product.name}</strong>
                                </Typography>
                                <Typography marginY variant="body">
                                    {product.description}
                                </Typography>
                                <Typography
                                    marginY
                                    variant="h6"
                                    fontWeight="bold"
                                    color="success.main"
                                >
                                    {restaurantSettings.show_products_price &&
                                        convertToBrl(product.price)}
                                </Typography>

                                {isUserAtRestaurant && (
                                    <Grid container rowGap={2} marginTop={2}>
                                        <QuantityPicker
                                            handleIncrement={handleIncrement}
                                            handleDecrement={handleDecrement}
                                            value={quantity}
                                        />
                                        <CustomButton
                                            text="Adicionar ao pedido"
                                            startIcon={<PlaylistAddIcon />}
                                            onClick={() => handleAddToOrder()}
                                        />
                                    </Grid>
                                )}
                            </Grid>
                            <Grid padding item sm={12}>
                                <CustomAccordion
                                    title="Ingredientes"
                                    content={
                                        <Typography>
                                            {product.ingredients &&
                                            product.ingredients !== ""
                                                ? product.ingredients
                                                : "Não informado"}
                                        </Typography>
                                    }
                                />
                                <CustomAccordion
                                    title="Observações"
                                    content={
                                        <Typography>
                                            {product.notes &&
                                            product.notes !== ""
                                                ? product.notes
                                                : "Não informado"}
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
            }
        />
    );
}

export default ProductModal;
