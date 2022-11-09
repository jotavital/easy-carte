import { Fab } from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { useNavigate } from "react-router-dom";

function SeeOrderTabButton() {
    const navigate = useNavigate();

    const handleSeeOrderTab = () => {
        navigate("/order-tab");
    };

    return (
        <Fab
            sx={{
                position: "fixed",
                bottom: 16,
                right: 16,
            }}
            color="primary"
            aria-label="add"
            variant="extended"
            onClick={() => handleSeeOrderTab()}
        >
            <PlaylistAddCheckIcon sx={{ marginRight: 1 }} fontSize="large" />
            Ver pedido
        </Fab>
    );
}

export default SeeOrderTabButton;
