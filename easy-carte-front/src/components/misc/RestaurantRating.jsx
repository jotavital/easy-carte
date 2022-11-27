import StarIcon from "@mui/icons-material/Star";
import { Grid, Typography } from "@mui/material";

function RestaurantRating() {
    return (
        <Grid container>
            <Typography color="warning.main" variant="h5">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "1.1rem" }} marginLeft>
                4.7
            </Typography>
        </Grid>
    );
}

export default RestaurantRating;
