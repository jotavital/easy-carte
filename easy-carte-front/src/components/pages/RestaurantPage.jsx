import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Card, Grid, Typography, CardContent, Box } from "@mui/material";
import CustomLoading from "../misc/CustomLoading";
import { apiClient } from "../../providers/apiClient";
import RestaurantOpeningHours from "../text/RestaurantOpeningHours";
import CustomDivider from "../misc/CustomDivider";
import RestaurantMoreInfoModal from "../modals/RestaurantMoreInfoModal";
import ProductList from "../lists/ProductList";
import SeeOrderTabButton from "../buttons/SeeOrderTabButton";
import { HelpersContext } from "../../contexts/helpers";

function RestaurantPage() {
    const { restaurant_id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const { isUserAtRestaurant } = useContext(HelpersContext);

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
                                    {/* <RestaurantRating /> */}
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

            {isUserAtRestaurant && <SeeOrderTabButton />}
        </Card>
    );
}

export default RestaurantPage;
