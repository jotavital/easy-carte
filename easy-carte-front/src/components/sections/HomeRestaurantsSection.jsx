import { Grid, CircularProgress } from '@mui/material';
import HomeRestaurantCard from '../cards/HomeRestaurantCard';
import { apiClient } from '../../providers/apiClient';
import { useState, useEffect } from 'react';

function HomeRestaurantsSection({ cityUrl }) {
    const [restaurants, setRestaurants] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const getRestaurants = () => {
        apiClient.get('city/' + cityUrl + '/restaurants')
            .then((response) => {
                setRestaurants(response.data);
                setIsDataLoaded(true);
            });
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    return (
        <Grid container justifyContent='center' alignItems='center' spacing={1} sx={{ minHeight: 200 }} padding={1}>
            {!isDataLoaded
                ? <CircularProgress />
                : restaurants.map((restaurant) => {
                    return <HomeRestaurantCard key={restaurant.id} name={restaurant.name} />
                })
            }
        </Grid>
    );
}

export default HomeRestaurantsSection;