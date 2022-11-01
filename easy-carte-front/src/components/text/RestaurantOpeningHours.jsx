import { Typography, Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function RestaurantOpeningHours({ opening_hours }) {
    return (
        <Grid container>
            <AccessTimeIcon sx={{ marginRight: 0.5 }} fontSize="small" />
            <Typography>{opening_hours}</Typography>
        </Grid>
    );
}

export default RestaurantOpeningHours;
