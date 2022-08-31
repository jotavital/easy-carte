import { useParams } from "react-router-dom";
import { Grid, TextField, Typography } from '@mui/material';
import HomeRestaurantsSection from '../sections/HomeRestaurantsSection';
import SearchInput from '../forms/inputs/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity } from "../../redux/appSlice";
import WhereAreYou from '../sections/WhereAreYou';
import { useEffect, useState } from "react";
import CategoriesListWithIcon from "../lists/CategoriesListWithIcon";
import { apiClient } from "../../providers/apiClient";
import UserLocationText from '../text/UserLocationText';
import Image from "../images/Image";
import CustomButton from "../buttons/CustomButton";

function RestaurantsListPage() {
    const dispatch = useDispatch();
    const { city_url } = useParams();
    const isCitySelected = useSelector((state) => state.app.isCitySelected);
    const [userLocation, setUserLocation] = useState(localStorage.getItem('user_location') ?? null);
    const [areCategoriesLoaded, setAreCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState({});

    useEffect(() => {
        apiClient.get('/restaurant-categories')
            .then(({ data }) => {
                setCategories(data);
                setAreCategoriesLoaded(true);
            })
    }, []);

    const handleUserLocationChanged = (location) => {
        setUserLocation(location);
        localStorage.setItem('user_location', location);
    }

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
                    <Grid item container justifyContent='center' alignItems='center'>
                        <Grid container item sm={8} justifyContent='center' padding={2}>
                            <Grid item sm={6}>
                                <Image src="./illustrations/woman_cellphone.svg" />
                            </Grid>
                            <Grid container padding justifyContent='center'>
                                <Typography variant="h5" fontWeight='bold'>
                                    Código do restaurante
                                </Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography>
                                    Você deve encontrar o código do restaurante nas mesas ou no balcão
                                </Typography>
                            </Grid>
                            <Grid container paddingTop={2} justifyContent='center'>
                                <TextField label="Código do restaurante" />
                            </Grid>
                        </Grid>
                        <CustomButton text='Pronto' color='primary' />
                    </Grid>
                    :
                    <WhereAreYou handleUserLocationChanged={handleUserLocationChanged} />
            }
        </Grid>
    );
}

export default RestaurantsListPage;