import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CircularProgress, Grid, Typography, CardContent, Box } from '@mui/material';
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

        apiClient.get('/restaurants/' + restaurant_id + '/products')
            .then(({ data }) => {
                console.log(data);
            });
    }, [restaurant_id]);

    return (
        <Card>
            <CardContent component={Grid} container item justifyContent='center' paddingY={1}>
                {!isDataLoaded
                    ?
                    <CircularProgress />
                    :
                    <Grid container justifyContent='center'>
                        <Grid container>
                            <Grid item container alignItems='center' padding xs={4} sm={3} md={2}>
                                <Box
                                    component="img"
                                    src={restaurant.logo_url}
                                    alt={restaurant.name}
                                    className="img-responsive img-rounded"
                                />
                            </Grid>
                            <Grid item padding xs={8}>
                                <Typography variant='h5'>
                                    {restaurant.name}
                                </Typography>
                                <RestaurantRating />
                                <Typography variant='body2'>
                                    {restaurant.description}
                                </Typography>
                                <Grid container item marginTop>
                                    <RestaurantOpeningHours opening_hours={restaurant.opening_hours} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </CardContent>
        </Card>
    );
}

export default RestaurantPage;