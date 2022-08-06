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
        <Grid container className="min-h-100" justifyContent='center' paddingY={1}>
            {!isDataLoaded
                ?
                <CircularProgress />
                :
                <Grid container item xs={12} justifyContent='center' className="bg-purple">
                    <Grid container className="bg-red" xs={10} sx={{ maxHeight: 150 }}>
                        <Grid container className="bg-green" justifyContent='center' padding xs={4}>
                            <img width={150} class="img-rounded" src={restaurant.logo_url} alt={restaurant.name} />
                        </Grid>
                        <Grid className="bg-yellow" padding xs={8}>
                            <Typography variant='h5'>
                                {restaurant.name}
                            </Typography>
                            <Typography variant='body2'>
                                {restaurant.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    );
}

export default RestaurantPage;