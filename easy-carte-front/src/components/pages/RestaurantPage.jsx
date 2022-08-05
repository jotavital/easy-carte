import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { apiClient } from '../../providers/apiClient';

function RestaurantPage() {
    const { restaurant_id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        apiClient.get('/restaurants/' + restaurant_id)
            .then(({ data }) => {
                setRestaurant(data);
                setIsDataLoaded(true);
            });
    }, [restaurant_id]);

    return (
        <Grid container justifyContent='center' alignItems='center' paddingY={3}>
            {!isDataLoaded
                ? <CircularProgress />
                : <Typography variant='h6'>{restaurant.name}</Typography>
            }
        </Grid>
    );
}

export default RestaurantPage;