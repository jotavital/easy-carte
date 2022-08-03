import { Grid, CircularProgress } from '@mui/material';
import HomeRestaurantCard from '../cards/HomeRestaurantCard';
import { apiClient } from '../../providers/apiClient';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function HomeRestaurantsSection({ cityUrl }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [restaurants, setRestaurants] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // !!! i need to get the rests everytime the search updates.... 
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
    }, []);

    return (
        <Grid container justifyContent='center' alignItems='center' spacing={1} sx={{ minHeight: 200 }} paddingY={3}>
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