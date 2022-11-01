import { Typography } from "@mui/material";

function RestaurantOpenClosed({ isOpen }) {
    if (!isOpen) {
        return (
            <Typography color="error.main" textAlign="center">
                Fechado
            </Typography>
        );
    }

    return (
        <Typography color="success.main" textAlign="center">
            Aberto
        </Typography>
    );
}

export default RestaurantOpenClosed;
