import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import RestaurantOpenClosed from '../text/RestaurantOpenClosed';
import RestaurantOpeningHours from '../text/RestaurantOpeningHours';
import { useNavigate } from 'react-router-dom';

function HomeRestaurantCard({ restaurant }) {
    const navigate = useNavigate();

    return (
        <Grid item lg={2}>
            <Card>
                <CardActionArea onClick={() => navigate('/restaurants/' + restaurant.id)}>
                    <CardMedia
                        component="img"
                        height="100"
                        image={restaurant.logo_url}
                        alt={restaurant.logo_url}
                    />
                    <CardContent>
                        <Typography textAlign='center' fontWeight='bold'>
                            {restaurant.name}
                        </Typography>
                        <Grid container justifyContent='center'>
                            <RestaurantOpeningHours opening_hours={restaurant.opening_hours} />
                        </Grid>
                        <RestaurantOpenClosed isOpen={restaurant.is_open} />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default HomeRestaurantCard;