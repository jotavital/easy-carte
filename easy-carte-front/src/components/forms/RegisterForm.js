import { Grid, Button, Stack, Typography, Link } from "@mui/material";
import { useForm } from 'react-hook-form';
import { format as formatDate } from 'date-fns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { apiClient } from '../../providers/apiClient';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import FullNameInput from './inputs/FullNameInput';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';
import BirthDateInput from "./inputs/BirthDateInput";
import SuccessButton from "../buttons/SuccessButton";

function RegisterForm() {

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const theme = useTheme();

    const onSubmit = (data) => {
        data.birth_date = formatDate(data.birth_date, 'yyyy-MM-dd');

        apiClient.post('/user', data)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200 && response.data === true) {
                    navigate('/login');
                } else {
                    console.error('Não foi possível se cadastrar agora. Tente novamente.');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    <FullNameInput register={register} errors={errors} />
                    <BirthDateInput control={control} />
                    <EmailInput register={register} errors={errors} />
                    <PasswordInput register={register} errors={errors} />
                    <Grid container>
                        <Typography color={theme.palette.info.main}>
                            Já é cadastrado?
                            <Link marginLeft={1} href='/login'>Entrar</Link>
                        </Typography>
                    </Grid>
                    <SuccessButton text="Enviar" />
                </Stack>
            </form>
        </LocalizationProvider>
    );
}

export default RegisterForm;