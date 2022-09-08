import { Grid } from '@mui/material';
import HomeRestaurantsSection from '../sections/HomeRestaurantsSection';
import SearchInput from '../forms/inputs/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity } from "../../redux/appSlice";
import WhereAreYou from '../sections/WhereAreYou';
import { useEffect, useState } from "react";
import CategoriesListWithIcon from "../lists/CategoriesListWithIcon";
import { apiClient } from "../../providers/apiClient";
import UserLocationText from '../text/UserLocationText';
import EnterRestaurantCode from "../sections/EnterRestaurantCode";
import { useParams } from 'react-router-dom';

function RestaurantsListPage() {
    const dispatch = useDispatch();
    const { city_url } = useParams();
    const isCitySelected = useSelector((state) => state.app.isCitySelected);
    const [userLocation, setUserLocation] = useState(localStorage.getItem('user_location') ?? null);
    const [areCategoriesLoaded, setAreCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState({});

    const handleUserLocationChanged = (location) => {
        setUserLocation(location);
        localStorage.setItem('user_location', location);
    }

    useEffect(() => {
        apiClient.get('/restaurant-categories')
            .then(({ data }) => {
                setCategories(data);
                setAreCategoriesLoaded(true);
            })
    }, []);


    if (!isCitySelected) {
        dispatch(selectCity(city_url));
    }

    return (
        <Grid container>
            {(userLocation === 'home') ?
                <>
                    <Grid padding container item justifyContent='space-between'>
                        <Grid alignItems='center' justifyContent={{ sm: 'left', xs: 'center' }} padding item container md={3} sm={6} xs={12}>
                            <UserLocationText handleUserLocationChanged={handleUserLocationChanged} />
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <SearchInput />
                        </Grid>
                    </Grid>
                    <CategoriesListWithIcon categories={categories} areCategoriesLoaded={areCategoriesLoaded} />
                    <HomeRestaurantsSection cityUrl={city_url} />
                </>
                :
                (userLocation === 'restaurant') ?
                    <EnterRestaurantCode />
                    :
                    <WhereAreYou handleUserLocationChanged={handleUserLocationChanged} />
            }
        </Grid>
    );
}

export default RestaurantsListPage;