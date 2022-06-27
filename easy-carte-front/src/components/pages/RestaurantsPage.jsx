import { useParams } from "react-router-dom";
import { Grid } from '@mui/material';
import HomeRestaurantsSection from '../sections/HomeRestaurantsSection';
import SearchInput from '../forms/inputs/SearchInput';

function RestaurantsPage() {
    const { city_url } = useParams();

    return (
        <Grid container>
            <Grid container item justifyContent='end'>
                <Grid item sm={4}>
                    <SearchInput />
                </Grid>
            </Grid>
            <HomeRestaurantsSection cityUrl={city_url} />
        </Grid>
    );
}

export default RestaurantsPage;