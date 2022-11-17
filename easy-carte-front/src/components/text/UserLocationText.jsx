import { Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useUserLocation } from "../../contexts/userLocation";

function UserLocationText() {
    const { userLocation, handleSetUserLocation } = useUserLocation();

    return (
        <Button onClick={() => handleSetUserLocation()}>
            <LocationOnIcon />
            Você está em: {userLocation === "home" ? "casa" : "restaurante"}
        </Button>
    );
}

export default UserLocationText;
