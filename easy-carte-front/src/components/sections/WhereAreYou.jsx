import { Grid } from '@mui/material';
import CardWithImage from './../cards/CardWithImage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EnterRestaurantCode from "../sections/EnterRestaurantCode";
import RestaurantsListPage from '../pages/RestaurantsListPage';

function WhereAreYou() {
    const [userLocation, setUserLocation] = useState(localStorage.getItem('user_location') ?? null);
    const currentRestaurant = localStorage.getItem('current_restaurant') ?? null;
    const navigate = useNavigate();

    const handleUserLocationChanged = (location) => {
        if (!location || location === '') {
            localStorage.removeItem('user_location');
            return 1;
        }

        setUserLocation(location);
        localStorage.setItem('user_location', location);
    }

    console.log(userLocation);
    return (
        <Grid container>
            {(userLocation === 'home') ?
                <RestaurantsListPage />
                :
                (userLocation === 'restaurant') ?
                    (currentRestaurant) ?
                        navigate('/restaurants/' + currentRestaurant + '/products')
                        :
                        <EnterRestaurantCode handleUserLocationChanged={handleUserLocationChanged} />
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