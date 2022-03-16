import { useTheme } from '@mui/material';
import { Grid, Typography, Button } from "@mui/material";
import { TextField } from "@mui/material";

function Register() {

    const theme = useTheme();

    return (
        <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
            <Grid item xs={10} sm={6} md={4} lg={3} >
                <Typography variant="h3" textAlign='center'>Cadastro</Typography>
                <Grid mt={2}>
                    <TextField fullWidth label='Nome completo' type='text' required />
                </Grid>
                <Grid mt={2}>
                    <TextField fullWidth label='Nome de usuário' type='text' required />
                </Grid>
                <Grid mt={2}>
                    <TextField fullWidth label='Senha' type='password' required />
                </Grid>
                <Grid mt={2} container justifyContent='center'>
                    <Button variant="contained" color='success'>Enviar</Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Register;