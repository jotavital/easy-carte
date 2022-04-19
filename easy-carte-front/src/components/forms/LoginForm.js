import { Grid, Button, TextField, Stack } from "@mui/material";
import { useForm } from 'react-hook-form';
import { apiClient } from '../providers/apiClient';

function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
        apiClient.post('/login', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <TextField fullWidth label='E-mail' type='email' value="teste@g.com" {...register('email', { required: true })} />
                {errors.email && "Campo obrigatório"}
                <TextField fullWidth label='Senha' type='password' value="123" {...register('password', { required: true })} />
                {errors.password && "Campo obrigatório"}
                <Grid container justifyContent='center'>
                    <Button variant='contained' color='success' type='submit'>Entrar</Button>
                </Grid>
            </Stack>
        </form>
    );
}

export default LoginForm;