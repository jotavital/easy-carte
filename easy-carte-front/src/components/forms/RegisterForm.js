import { Grid, Button, TextField, Stack } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { format as formatDate } from 'date-fns';
import DatePicker from '@mui/lab/DatePicker';

function RegisterForm() {

    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.birth_date = formatDate(data.birth_date, 'yyyy-MM-dd');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField fullWidth label='Nome completo' type='text' {...register('full_name', { required: true })} />
                {errors.full_name && "Campo obrigatório"}
                <Controller
                    control={control}
                    name="birth_date"
                    defaultValue={null}
                    rules={{ required: true }}
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
                {errors.birth_date && "Campo obrigatório"}
                <TextField fullWidth label='E-mail' type='email' {...register('email', { required: true })} />
                {errors.email && "Campo obrigatório"}
                <TextField fullWidth label='Senha' type='password' {...register('password', { required: true })} />
                {errors.password && "Campo obrigatório"}
                <Grid mt={2} container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Enviar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default RegisterForm;