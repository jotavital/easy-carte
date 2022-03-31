import { Grid, Typography, Button, TextField, Stack } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { format } from 'date-fns';

function Register() {

    const [formValues, setFormValues] = useState({});
    const [birthDate, setBirthDate] = useState('');

    const handleInputChanges = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleBirthDateChanges = (value) => {
        setFormValues({ ...formValues, 'birthDate': value });
        setBirthDate(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    console.log(formValues);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
                <Grid item xs={10} sm={6} md={4} lg={3} >
                    <form onSubmit={handleFormSubmit}>
                        <Stack spacing={3}>
                            <Typography variant="h3" textAlign='center'>Cadastro</Typography>
                            <TextField fullWidth label='Nome completo' type='text' name="full_name" onChange={handleInputChanges} required />
                            <DatePicker
                                disableFuture
                                label="Data de nascimento"
                                openTo="year"
                                views={['year', 'month', 'day']}
                                onChange={(value) => {
                                    handleBirthDateChanges(value);
                                }}
                                value={birthDate}
                                renderInput={(props) => <TextField {...props} />}
                            />
                            <TextField fullWidth label='E-mail' type='email' name='email' onChange={handleInputChanges} required />
                            <TextField fullWidth label='Senha' type='password' name='password' onChange={handleInputChanges} required />
                            <Grid mt={2} container justifyContent='center'>
                                <Button variant='contained' color='success' type='submit'>Enviar</Button>
                            </Grid>
                        </Stack>
                    </form>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Register;