import { Grid } from '@mui/material';
import CardWithImage from './../cards/CardWithImage';
import { useNavigate } from 'react-router-dom';
import EnterRestaurantCode from "../sections/EnterRestaurantCode";
import RestaurantsListPage from '../pages/RestaurantsListPage';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLocation } from '../../redux/appSlice';
import { useEffect } from 'react';

function WhereAreYou() {
    const currentRestaurant = localStorage.getItem('current_restaurant') ?? null;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userLocation = useSelector((state) => state.app.userLocation);

    const handleUserLocationChanged = (location) => {
        dispatch(setUserLocation(location));
    }

    return (
        <Grid container>
            {(userLocation === 'home') ?
                <RestaurantsListPage />
                :
                (userLocation === 'restaurant') ?
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