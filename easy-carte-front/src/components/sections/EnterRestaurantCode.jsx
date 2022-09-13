import { Grid, Stack, TextField, Typography } from "@mui/material";
import CustomButton from "../buttons/CustomButton";
import Image from "../images/Image";
import { useForm } from "react-hook-form";
import { apiClient } from "../../providers/apiClient";
import { useNavigate } from "react-router-dom";
import { setSnackbar } from '../../redux/snackbars/snackbarsSlice';
import { useDispatch } from "react-redux";
import { setUserLocation } from "../../redux/appSlice";

function EnterRestaurantCode() {
    const { handleSubmit, formState: { errors }, register, setError } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = ({ code }) => {
        apiClient.get('/restaurants/check-code/' + code)
            .then(({ data }) => {
                if (data) {
                    navigate('/restaurants/' + data.id + '/products');
                } else {
                    dispatch(setSnackbar(true, 'error', 'Código de restaurante inválido', 'right'));
                    setError('code');
                }
            });
    }

    const handleUserLocationChanged = (location) => {
        dispatch(setUserLocation(location));
    }

    return (
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
                    <Typography marginBottom>
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
                        <Grid container justifyContent='center' gap>
                            <CustomButton text='Voltar' color='primary' onClick={() => handleUserLocationChanged('')} />
                            <CustomButton text='Pronto' type='submit' />
                        </Grid>
                    </Stack>
                </form>
            </Grid>
        </Grid>
    );
}

export default EnterRestaurantCode;