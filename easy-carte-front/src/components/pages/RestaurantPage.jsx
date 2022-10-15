import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Grid, Typography, CardContent, Box, Fab } from "@mui/material";
import CustomLoading from "../misc/CustomLoading";
import { apiClient } from "../../providers/apiClient";
import RestaurantOpeningHours from "../text/RestaurantOpeningHours";
import RestaurantRating from "../misc/RestaurantRating";
import CustomDivider from "../misc/CustomDivider";
import RestaurantMoreInfoModal from "../modals/RestaurantMoreInfoModal";
import ProductList from "../lists/ProductList";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

function RestaurantPage() {
    const { restaurant_id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const navigate = useNavigate();

    const handleSeeOrderTab = () => {
        navigate('/order-tab');
    };

    useEffect(() => {
        apiClient.get("/restaurants/" + restaurant_id).then(({ data }) => {
            setRestaurant(data);
            setIsDataLoaded(true);
        });
    }, [restaurant_id]);

    return (
        <Card>
            <CardContent
                component={Grid}
                container
                item
                justifyContent="center"
                paddingY={1}
            >
                {!isDataLoaded ? (
                    <CustomLoading />
                ) : (
                    <Grid>
                        <Grid
                            container
                            justifyContent="center"
                            marginBottom={3}
                        >
                            <Grid container>
                                <Grid
                                    item
                                    container
                                    alignItems="center"
                                    padding
                                    xs={12}
                                    sm={3}
                                    md={2}
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
                                        {restaurant.name}
                                    </Typography>
                                    <Typography variant="h6">
                                        {restaurant.category.name}
                                    </Typography>
                                    <RestaurantRating />
                                    <Typography variant="body2">
                                        {restaurant.description}
                                    </Typography>
                                    <Grid container item marginTop>
                                        <RestaurantOpeningHours
                                            opening_hours={
                                                restaurant.opening_hours
                                            }
                                        />
                                    </Grid>
                                    <RestaurantMoreInfoModal
                                        restaurant={restaurant}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <CustomDivider />
                        <ProductList restaurantId={restaurant_id} />
                    </Grid>
                )}
            </CardContent>

            <Fab
                sx={{
                    position: "fixed",
                    bottom: 16,
                    right: 16,
                }}
                color="primary"
                aria-label="add"
                variant="extended"
                onClick={() => handleSeeOrderTab()}
            >
                <PlaylistAddCheckIcon
                    sx={{ marginRight: 1 }}
                    fontSize="large"
                />
                Ver pedido
            </Fab>
        </Card>
    );
}

export default RestaurantPage;
