import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import RestaurantOpenClosed from '../text/RestaurantOpenClosed';
import RestaurantOpeningHours from '../text/RestaurantOpeningHours';

function HomeRestaurantCard({ restaurant }) {
    return (
        <Grid item lg={2}>
            <CardActionArea onClick={() => window.location.href = '/restaurants/' + restaurant.id}>
                <Card>
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
                </Card>
            </CardActionArea>
        </Grid>
    );
}

export default HomeRestaurantCard;