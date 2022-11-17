import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import CustomLoading from "../misc/CustomLoading";
import { apiClient } from "../../providers/apiClient";
import RestaurantMoreInfoModal from "../modals/RestaurantMoreInfoModal";
import ProductList from "../lists/ProductList";
import SeeOrderTabButton from "../buttons/SeeOrderTabButton";
import { useHelpers } from "../../contexts/helpers";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRestaurants } from "../../contexts/restaurants";

function RestaurantPage() {
    const { restaurant_id } = useParams();
    const { isUserAtRestaurant } = useHelpers();
    const { fetchRestaurantData, restaurant, isDataLoaded } = useRestaurants();
    const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalInfoOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalInfoOpen(false);
    };

    useEffect(() => {
        fetchRestaurantData(restaurant_id);
    }, [restaurant_id]);

    return (
        <>
            {!isDataLoaded ? (
                <CustomLoading />
            ) : (
                <Grid>
                    <Grid container justifyContent="center">
                        <Grid container>
                            <Grid
                                item
                                container
                                alignItems="center"
                                padding
                                xs={12}
                                sm={3}
                                md={2}
                                justifyContent={{ sm: "left", xs: "center" }}
                            >
                                <Box
                                    component="img"
                                    src={restaurant.logo_url}
                                    alt={restaurant.name}
                                    className="img-responsive img-rounded"
                                />
                            </Grid>
                            <Grid item padding xs={12} sm={8}>
                                <Typography variant="h5">
                                    <strong>{restaurant.name}</strong>
                                    <IconButton
                                        onClick={handleOpenModal}
                                        color="primary"
                                    >
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </Typography>
                                <Typography variant="subtitle">
                                    {restaurant.category.name}
                                </Typography>
                                {/* <RestaurantRating /> */}
                                <RestaurantMoreInfoModal
                                    restaurant={restaurant}
                                    open={isModalInfoOpen}
                                    handleCloseModal={handleCloseModal}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <ProductList restaurantId={restaurant_id} />
                </Grid>
            )}

            {isUserAtRestaurant && <SeeOrderTabButton />}
        </>
    );
}

export default RestaurantPage;
