import { Typography, Grid } from "@mui/material";

function RestaurantOpeningHours({ opening_hours }) {
    return (
        <Grid container justifyContent="center" marginY >
            <Typography textAlign="center" variant="subtitle">
                {opening_hours}
            </Typography>
        </Grid>
    );
}

export default RestaurantOpeningHours;
