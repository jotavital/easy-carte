import { Grid, Stack, TextField, Typography } from "@mui/material";
import CustomButton from "../buttons/CustomButton";
import Image from "../images/Image";
import { useForm } from "react-hook-form";
import { apiClient } from "../../providers/apiClient";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserLocation } from "../../redux/appSlice";
import { toast } from "react-toastify";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function EnterRestaurantCode() {
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
    } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = ({ code }) => {
        apiClient.get("/restaurants/check-code/" + code).then(({ data }) => {
            if (data) {
                localStorage.setItem("easycarte@current_restaurant", data.id);

                navigate("/restaurants/" + data.id + "/products");
            } else {
                toast.error("Código de restaurante inválido");
                setError("code");
            }
        });
    };

    const handleUserLocationChanged = (location) => {
        dispatch(setUserLocation(location));
    };

    return (
        <Grid
            marginBottom={3}
            item
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid container item sm={8} justifyContent="center" padding={2}>
                <Grid item padding sm={5}>
                    <Image
                        src={
                            process.env.PUBLIC_URL +
                            "/illustrations/woman_cellphone.svg"
                        }
                    />
                </Grid>
                <Grid container padding justifyContent="center">
                    <Typography variant="h5" fontWeight="bold">
                        Código do restaurante
                    </Typography>
                </Grid>
                <Grid container justifyContent="center">
                    <Typography marginBottom>
                        Você deve encontrar o código do restaurante nas mesas ou
                        no balcão
                    </Typography>
                </Grid>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            error={!!errors.code}
                            helperText={errors.code?.message}
                            label="Código do restaurante"
                            {...register("code", {
                                required: {
                                    value: true,
                                    message: "Informe o código do restaurante",
                                },
                                maxLength: {
                                    value: 4,
                                    message: "Até 4 caracteres",
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Apenas números",
                                },
                            })}
                        />
                        <Grid container justifyContent="center" gap>
                            <CustomButton
                                startIcon={<LocationOnIcon />}
                                text="Mudar localização"
                                color="primary"
                                onClick={() => handleUserLocationChanged("")}
                            />
                            <CustomButton
                                text="Pronto"
                                type="submit"
                                endIcon={<ArrowForwardIcon />}
                            />
                        </Grid>
                    </Stack>
                </form>
            </Grid>
        </Grid>
    );
}

export default EnterRestaurantCode;
