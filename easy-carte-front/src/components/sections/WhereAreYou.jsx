import { Grid } from "@mui/material";
import CardWithImage from "./../cards/CardWithImage";
import EnterRestaurantCode from "../sections/EnterRestaurantCode";
import RestaurantsListPage from "../pages/RestaurantsListPage";
import { useDispatch } from "react-redux";
import { setUserLocation } from "../../redux/appSlice";
import { useContext } from "react";
import { HelpersContext, useHelpers } from "../../contexts/helpers";
import { useEffect } from "react";

function WhereAreYou() {
    const dispatch = useDispatch();
    const { isUserAtHome, isUserAtRestaurant } = useContext(HelpersContext);
    const { currentRestaurant, redirectToCurrentRestaurant } = useHelpers();

    const handleUserLocationChanged = (location) => {
        dispatch(setUserLocation(location));
    };

    useEffect(() => {
        console.log(currentRestaurant);
        if (currentRestaurant) {
            redirectToCurrentRestaurant();
        }
    }, []);

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
                            action={() => handleUserLocationChanged("home")}
                            src={
                                process.env.PUBLIC_URL +
                                "/illustrations/house.svg"
                            }
                            cardTitle="Estou em casa"
                            cardText="Quero ver o cardápio dos restaurantes"
                        />
                        <CardWithImage
                            action={() =>
                                handleUserLocationChanged("restaurant")
                            }
                            src={
                                process.env.PUBLIC_URL +
                                "/illustrations/restaurant.svg"
                            }
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
