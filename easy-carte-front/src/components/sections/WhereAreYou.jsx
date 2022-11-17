import { Grid } from "@mui/material";
import CardWithImage from "./../cards/CardWithImage";
import EnterRestaurantCode from "../sections/EnterRestaurantCode";
import RestaurantsListPage from "../pages/RestaurantsListPage";
import { useHelpers } from "../../contexts/helpers";
import { useEffect } from "react";
import { useUserLocation } from "../../contexts/userLocation";

function WhereAreYou() {
    const { handleSetUserLocation, isUserAtHome, isUserAtRestaurant } =
        useUserLocation();
    const { currentRestaurant, redirectToCurrentRestaurant } = useHelpers();

    useEffect(() => {
        if (currentRestaurant) {
            redirectToCurrentRestaurant();
        }
    });

    return (
        <Grid container>
            {isUserAtHome ? (
                <RestaurantsListPage />
            ) : isUserAtRestaurant ? (
                <EnterRestaurantCode />
            ) : (
                <>
                    <Grid
                        padding={3}
                        justifyContent="center"
                        container
                        item
                        gap={3}
                    >
                        <CardWithImage
                            action={() => handleSetUserLocation("home")}
                            src="/illustrations/house.svg"
                            cardTitle="Estou em casa"
                            cardText="Quero ver o cardápio dos restaurantes"
                        />
                        <CardWithImage
                            action={() => handleSetUserLocation("restaurant")}
                            src="/illustrations/restaurant.svg"
                            cardTitle="Estou no restaurante"
                            cardText="Quero fazer o meu pedido"
                        />
                    </Grid>
                </>
            )}
        </Grid>
    );
}

export default WhereAreYou;
