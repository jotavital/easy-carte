import { useParams } from "react-router-dom";
import { Grid } from '@mui/material';
import HomeRestaurantsSection from '../sections/HomeRestaurantsSection';

function RestaurantsPage() {
    const { city_url } = useParams();

    return (
        <Grid container>
            <HomeRestaurantsSection cityUrl={city_url} />
        </Grid>
    );
}

export default RestaurantsPage;