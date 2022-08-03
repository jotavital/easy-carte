import { Grid, CircularProgress, Typography } from '@mui/material';
import HomeRestaurantCard from '../cards/HomeRestaurantCard';
import { apiClient } from '../../providers/apiClient';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function HomeRestaurantsSection({ cityUrl }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [restaurants, setRestaurants] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const getRestaurants = () => {
        apiClient.get('cities/' + cityUrl + '/restaurants?search=' + searchParams.get('search'))
            .then((response) => {
                console.log(response);
                setRestaurants(response.data);
                setIsDataLoaded(true);
            });
    }

    useEffect(() => {
        getRestaurants();
    }, [searchParams]);

    return (
        <Grid container justifyContent='center' alignItems='center' spacing={1} sx={{ minHeight: 200 }} paddingY={3}>
            {!isDataLoaded
                ? <CircularProgress />
                : (restaurants.length)
                    ? restaurants.map((restaurant) => {
                        return <HomeRestaurantCard key={restaurant.id} name={restaurant.name} />
                    })
                    : <Typography variant='h6'>Nenhum resultado encontrado.</Typography>
            }
        </Grid>
    );
}

export default HomeRestaurantsSection;