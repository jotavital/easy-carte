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

function ProductModal({ open, handleCloseModal, product }) {
    const { isUserAtRestaurant } = useContext(HelpersContext);

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
                                        <QuantityPicker />
                                        <CustomButton
                                            text="Adicionar ao pedido"
                                            startIcon={<PlaylistAddIcon />}
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
