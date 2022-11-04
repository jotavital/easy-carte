import { Grid, Typography } from "@mui/material";
import RegisterForm from "../forms/RegisterForm";

function RegisterPage() {
    return (
        <Grid
            className="full-body-height"
            item
            xs={12}
            container
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={10} sm={6} md={4} lg={3}>
                <Typography variant="h4" mb={3} textAlign="center">
                    Cadastre-se
                </Typography>
                <RegisterForm />
            </Grid>
        </Grid>
    );
}

export default RegisterPage;
