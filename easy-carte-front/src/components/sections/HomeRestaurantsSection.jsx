import { Grid, CircularProgress, Typography } from '@mui/material';
import HomeRestaurantCard from '../cards/HomeRestaurantCard';
import { apiClient } from '../../providers/apiClient';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function HomeRestaurantsSection({ cityUrl }) {
    const [searchParams] = useSearchParams();
    const [restaurants, setRestaurants] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        apiClient.get('cities/' + cityUrl + '/restaurants?search=' + searchParams.get('search'))
            .then((response) => {
                setRestaurants(response.data);
                setIsDataLoaded(true);
                console.log(response);
            });
    }, [cityUrl, searchParams]);

    return (
        <Grid container justifyContent='center' alignItems='center' spacing={1} sx={{ minHeight: 200 }} paddingY={3}>
            {!isDataLoaded
                ? <CircularProgress />
                : (restaurants.length)
                    ? restaurants.map((restaurant) => {
                        return <HomeRestaurantCard key={restaurant.id} restaurant={restaurant} />
                    })
                    : <Typography variant='h6'>Nenhum resultado encontrado.</Typography>
            }
        </Grid>
    );
}

export default HomeRestaurantsSection;