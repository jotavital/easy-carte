import { Button, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

function UserLocationText() {
    const userLocation = localStorage.getItem('user_location') ?? null;

    return (
        <Typography>
            <Button>
                <LocationOnIcon />
                Você está em: {(userLocation === 'home') ? 'casa' : 'restaurante'}
            </Button>
        </Typography>
    );
}

export default UserLocationText;