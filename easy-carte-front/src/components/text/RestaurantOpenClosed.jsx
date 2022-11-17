import { Typography } from "@mui/material";

function RestaurantOpenClosed({ isOpen }) {
    return (
        <Typography
            color={isOpen ? "success.main" : "error.main"}
            textAlign="center"
        >
            <strong>{isOpen ? "Aberto" : "Fechado"}</strong>
        </Typography>
    );
}

export default RestaurantOpenClosed;
