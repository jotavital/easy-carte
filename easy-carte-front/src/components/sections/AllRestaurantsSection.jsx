import { Grid } from '@mui/material';
import HomeRestaurantCard from '../cards/HomeRestaurantCard';

function AllRestaurantsSection() {
    return (
        <Grid container spacing={1} sx={{ backgroundColor: 'red' }} padding={1}>
            <HomeRestaurantCard />
            <HomeRestaurantCard />
            <HomeRestaurantCard />
            <HomeRestaurantCard />
            <HomeRestaurantCard />
            <HomeRestaurantCard />
        </Grid>
    );
}

export default AllRestaurantsSection;