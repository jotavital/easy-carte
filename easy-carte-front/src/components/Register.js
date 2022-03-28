import { Grid, Typography, Button, TextField, Stack } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react';
import ptBrLocale from 'date-fns/locale/pt-BR';

function Register() {

    const [dataNascimento, setDataNascimento] = useState('');

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
                <Grid item xs={10} sm={6} md={4} lg={3} >
                    <Stack spacing={3}>
                        <Typography variant="h3" textAlign='center'>Cadastro</Typography>
                        <TextField fullWidth label='Nome completo' type='text' required />
                        <DatePicker
                            disableFuture
                            label="Data de nascimento"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={dataNascimento}
                            onChange={(dataSelecionada) => {
                                setDataNascimento(dataSelecionada);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <TextField fullWidth label='E-mail' type='email' required />
                        <TextField fullWidth label='Senha' type='password' required />
                        <Grid mt={2} container justifyContent='center'>
                            <Button variant="contained" color='success'>Enviar</Button>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}

export default Register;