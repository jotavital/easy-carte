import { Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function RestaurantOpeningHours({ opening_hours }) {
    return (
        <>
            <AccessTimeIcon sx={{ marginRight: 0.5 }} fontSize='small' />
            <Typography>
                {opening_hours}
            </Typography>
        </>
    );
}

export default RestaurantOpeningHours;