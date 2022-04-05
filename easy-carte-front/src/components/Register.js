import { Grid, Typography } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ptBrLocale from 'date-fns/locale/pt-BR';
import RegisterForm from "./forms/RegisterForm";

function Register() {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
                <Grid item xs={10} sm={6} md={4} lg={3} >
                    <Typography variant="h3" mb={3} textAlign='center'>Cadastro</Typography>
                    <RegisterForm />
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Register;