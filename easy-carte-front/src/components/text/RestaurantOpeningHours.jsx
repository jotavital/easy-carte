import { Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function RestaurantOpeningHours({ opening_hours }) {
    return (
        <Grid justifyContent='center' item container>
            <AccessTimeIcon sx={{ marginRight: 0.5 }} fontSize='small' />
            <Typography textAlign='center'>
                {opening_hours}
            </Typography>
        </Grid>
    );
}

export default RestaurantOpeningHours;