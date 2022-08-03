import { useParams } from "react-router-dom";
import { Grid } from '@mui/material';
import HomeRestaurantsSection from '../sections/HomeRestaurantsSection';
import SearchInput from '../forms/inputs/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity } from "../../redux/appSlice";

function RestaurantsPage() {
    const dispatch = useDispatch();
    const { city_url } = useParams();
    const isCitySelected = useSelector((state) => state.app.isCitySelected);

    if (!isCitySelected) {
        dispatch(selectCity(city_url));
    }

    return (
        <Grid container>
            <Grid container item justifyContent='end'>
                <Grid item sm={5}>
                    <SearchInput />
                </Grid>
            </Grid>
            <HomeRestaurantsSection cityUrl={city_url} />
        </Grid>
    );
}

export default RestaurantsPage;