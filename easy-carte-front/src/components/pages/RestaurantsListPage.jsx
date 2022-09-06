import { useNavigate, useParams } from "react-router-dom";
import { Grid, Stack, TextField, Typography } from '@mui/material';
import HomeRestaurantsSection from '../sections/HomeRestaurantsSection';
import SearchInput from '../forms/inputs/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { selectCity } from "../../redux/appSlice";
import { setSnackbar } from "../../redux/snackbars/snackbarsSlice";
import WhereAreYou from '../sections/WhereAreYou';
import { useEffect, useState } from "react";
import CategoriesListWithIcon from "../lists/CategoriesListWithIcon";
import { apiClient } from "../../providers/apiClient";
import UserLocationText from '../text/UserLocationText';
import Image from "../images/Image";
import CustomButton from "../buttons/CustomButton";
import { useForm } from "react-hook-form";

function RestaurantsListPage() {
    const dispatch = useDispatch();
    const { city_url } = useParams();
    const isCitySelected = useSelector((state) => state.app.isCitySelected);
    const [userLocation, setUserLocation] = useState(localStorage.getItem('user_location') ?? null);
    const [areCategoriesLoaded, setAreCategoriesLoaded] = useState(false);
    const [categories, setCategories] = useState({});
    const { handleSubmit, formState: { errors }, register, setError } = useForm();
    const navigate = useNavigate();

    const handleUserLocationChanged = (location) => {
        setUserLocation(location);
        localStorage.setItem('user_location', location);
    }

    const onSubmit = ({ code }) => {
        apiClient.get('/restaurants/check-code/' + code)
            .then(({ data }) => {
                if (data) {
                    navigate('/restaurants/' + data.id + '/products');
                } else {
                    dispatch(setSnackbar(true, 'error', 'Código de restaurante inválido'));
                    setError('code');
                }
            });
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
                    <Grid marginBottom={3} item container justifyContent='center' alignItems='center'>
                        <Grid container item sm={8} justifyContent='center' padding={2}>
                            <Grid item padding sm={5}>
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
                            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        error={!!errors.code}
                                        helperText={errors.code?.message}
                                        label='Código do restaurante'
                                        {...register('code',
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Informe o código do restaurante"
                                                },
                                                maxLength: {
                                                    value: 4,
                                                    message: 'Até 4 caracteres'
                                                },
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: 'Apenas números',
                                                }
                                            }
                                        )}
                                    />
                                    <CustomButton text='Pronto' color='primary' type='submit' />
                                </Stack>
                            </form>
                        </Grid>
                    </Grid>
                    :
                    <WhereAreYou handleUserLocationChanged={handleUserLocationChanged} />
            }
        </Grid>
    );
}

export default RestaurantsListPage;