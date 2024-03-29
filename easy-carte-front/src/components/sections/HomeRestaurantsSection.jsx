import { Grid, Typography } from "@mui/material";
import CustomLoading from "../misc/CustomLoading";
import HomeRestaurantCard from "../cards/HomeRestaurantCard";
import { apiClient } from "../../providers/apiClient";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Empty from "../Empty";

function HomeRestaurantsSection({ cityUrl }) {
    const [searchParams] = useSearchParams();
    const [restaurants, setRestaurants] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        apiClient
            .get(
                "cities/" +
                    cityUrl +
                    "/restaurants?search=" +
                    searchParams.get("search") +
                    "&category=" +
                    searchParams.get("category")
            )
            .then(({ data }) => {
                setRestaurants(data);
                setIsDataLoaded(true);
            });
    }, [cityUrl, searchParams]);

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ minHeight: 200 }}
            paddingY={3}
        >
            {!isDataLoaded ? (
                <CustomLoading />
            ) : restaurants.length ? (
                restaurants.map((restaurant) => {
                    return (
                        <HomeRestaurantCard
                            key={restaurant.id}
                            restaurant={restaurant}
                        />
                    );
                })
            ) : (
                <Empty />
            )}
        </Grid>
    );
}

export default HomeRestaurantsSection;
