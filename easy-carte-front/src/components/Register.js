import { Grid, Typography, Box } from "@mui/material";
import { TextField } from "@mui/material";

function Register() {
    return (
        <Grid className="full-body-height" item xs={12} container alignItems='center' justifyContent='center'>
            <Grid item xs={6}>
                <Typography variant="h3" textAlign='center' >Cadastro</Typography>
                <Grid mt={3} xs={12} container justifyContent='center'>
                    <TextField label='Nome' type='text' required />
                </Grid>
                <Grid mt={2} xs={12} container justifyContent='center'>
                    <TextField label='Senha' type='password' required />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Register;