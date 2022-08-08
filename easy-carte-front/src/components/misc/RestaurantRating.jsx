import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';

function RestaurantRating() {
    return (
        <Typography color='warning.main' variant='h5'>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
        </Typography>
    );
}

export default RestaurantRating;