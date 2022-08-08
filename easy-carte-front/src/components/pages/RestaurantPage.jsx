import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CircularProgress, Grid, Typography, CardContent } from '@mui/material';
import { apiClient } from '../../providers/apiClient';
import RestaurantOpeningHours from '../text/RestaurantOpeningHours';
import RestaurantRating from '../misc/RestaurantRating';

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
        <Card>
            <CardContent>
                <Grid container className="min-h-100" justifyContent='center' paddingY={1}>
                    {!isDataLoaded
                        ?
                        <CircularProgress />
                        :
                        <Grid container item xs={12} justifyContent='center'>
                            <Grid container item xs={10} sx={{ maxHeight: 150 }}>
                                <Grid container item justifyContent='center' padding xs={4}>
                                    <img width={150} className="img-rounded" src={restaurant.logo_url} alt={restaurant.name} />
                                </Grid>
                                <Grid item padding xs={8}>
                                    <Typography variant='h5'>
                                        {restaurant.name}
                                    </Typography>
                                    <Typography variant='h5'>
                                        <RestaurantRating />
                                    </Typography>
                                    <Typography variant='body2'>
                                        {restaurant.description}
                                    </Typography>
                                    <Grid xs={3} container marginTop>
                                        <RestaurantOpeningHours opening_hours={restaurant.opening_hours} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card>
    );
}

export default RestaurantPage;