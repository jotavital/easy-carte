import { Grid } from '@mui/material';
import CardWithImage from './../cards/CardWithImage';
import EnterRestaurantCode from "../sections/EnterRestaurantCode";
import RestaurantsListPage from '../pages/RestaurantsListPage';
import { useDispatch } from 'react-redux';
import { setUserLocation } from '../../redux/appSlice';
import { useContext } from 'react';
import { HelpersContext } from '../../contexts/helpers';

function WhereAreYou() {
    const dispatch = useDispatch();
    const { isUserAtHome, isUserAtRestaurant } = useContext(HelpersContext);

    const handleUserLocationChanged = (location) => {
        dispatch(setUserLocation(location));
    }

    return (
        <Grid container>
            {isUserAtHome ?
                <RestaurantsListPage />
                :
                isUserAtRestaurant ?
                    <EnterRestaurantCode />
                    :
                    <>
                        <Grid padding={3} justifyContent='center' container item gap={3}>
                            <CardWithImage
                                action={() => handleUserLocationChanged('home')}
                                src="./illustrations/house.svg"
                                cardTitle="Estou em casa"
                                cardText="Quero ver o cardápio dos restaurantes"
                            />
                            <CardWithImage
                                action={() => handleUserLocationChanged('restaurant')}
                                src="./illustrations/restaurant.svg"
                                cardTitle="Estou no restaurante"
                                cardText="Quero fazer o meu pedido"
                            />
                        </Grid>
                    </>
            }
        </Grid>
    );
}

export default WhereAreYou;