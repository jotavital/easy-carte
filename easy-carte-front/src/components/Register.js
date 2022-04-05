import { Grid, Typography, Button, TextField, Stack } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react';
import ptBrLocale from 'date-fns/locale/pt-BR';
import { format as formatDate } from 'date-fns';
import { useForm, Controller } from 'react-hook-form';

function Register() {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBrLocale} >
            <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
                <Grid item xs={10} sm={6} md={4} lg={3} >
                    <Typography variant="h3" mb={3} textAlign='center'>Cadastro</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={3}>
                            <TextField fullWidth label='Nome completo' type='text' {...register('full_name', { required: true })} />
                            {errors.full_name && "Campo obrigatório"}
                            <Controller
                                control={control}
                                name="birth_date"
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <DatePicker
                                        disableFuture
                                        label="Data de nascimento"
                                        openTo="year"
                                        views={['year', 'month', 'day']}
                                        onChange={onChange}
                                        value={value}
                                        renderInput={(props) => <TextField {...props} />}
                                    />
                                )}
                            />
                            <TextField fullWidth label='E-mail' type='email' {...register('email', { required: true })} />
                            {errors.email && "Campo obrigatório"}
                            <TextField fullWidth label='Senha' type='password' {...register('password', { required: true })} />
                            {errors.password && "Campo obrigatório"}
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