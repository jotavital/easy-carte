import { Grid, Typography } from "@mui/material";
import CustomModal from "./CustomModal";
import CustomDivider from "../misc/CustomDivider";
import CustomAccordion from "../misc/CustomAccordion";
import ImageSliderWithThumbs from "../images/ImageSliderWithThumbs";
import CustomButton from "../buttons/CustomButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useContext } from "react";
import { HelpersContext } from "../../contexts/helpers";
import QuantityPicker from "../forms/inputs/QuantityPicker";
import { useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../providers/apiClient";

function ProductModal({ open, handleCloseModal, product }) {
    const min = 1;
    const max = 5;
    const { isUserAtRestaurant } = useContext(HelpersContext);
    const [quantity, setQuantity] = useState(1);
    const { isUserAuthenticated } = useContext(AuthContext);
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
                console.log(response);
                toast.success("Adicionado ao pedido");

                handleCloseModal();
            })
            .catch((error) => {
                toast.error("Erro ao adicionar ao pedido");
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
                        <Typography>
                            Erro ao carregar dados, tente novamente.
                        </Typography>
                    ) : (
                        <>
                            <Grid padding item xs={12} sm={6}>
                                <ImageSliderWithThumbs
                                    mainImage={product.main_image}
                                    images={product.images}
                                />
                            </Grid>
                            <Grid padding item sm={6}>
                                <Typography marginY variant="h4">
                                    {product.name}
                                </Typography>
                                <Typography marginY variant="body">
                                    {product.description}
                                </Typography>
                                <Typography
                                    marginY
                                    variant="h5"
                                    fontWeight="bold"
                                >
                                    {product.formatted_price}
                                </Typography>

                                {isUserAtRestaurant && (
                                    <Grid container rowGap={2} marginTop={3}>
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
                            <CustomDivider />
                            <Grid padding item sm={12}>
                                <Typography variant="h6">Detalhes</Typography>
                                {product.ingredients && (
                                    <CustomAccordion
                                        title="Ingredientes"
                                        content={
                                            <Typography>
                                                {product.ingredients}
                                            </Typography>
                                        }
                                    />
                                )}
                                {product.notes && (
                                    <CustomAccordion
                                        title="Observações"
                                        content={
                                            <Typography>
                                                {product.notes}
                                            </Typography>
                                        }
                                    />
                                )}
                            </Grid>
                        </>
                    )}
                </Grid>
            }
        />
    );
}

export default ProductModal;
