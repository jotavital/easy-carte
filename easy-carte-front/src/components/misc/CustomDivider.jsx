import { Grid } from "@mui/material";

function CustomDivider() {
    return (
        <Grid container padding justifyContent='center'>
            <Grid item justifyContent='center' xs={8}>
                <hr />
            </Grid>
        </Grid>
    );
}

export default CustomDivider;