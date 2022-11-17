import { Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../../redux/appSlice";

function UserLocationText() {
    const dispatch = useDispatch();
    const userLocation = useSelector((state) => state.app.userLocation);

    const handleUserLocationChanged = (location) => {
        dispatch(setUserLocation(location));
    };

    return (
        <Button onClick={() => handleUserLocationChanged("")}>
            <LocationOnIcon />
            Você está em: {userLocation === "home" ? "casa" : "restaurante"}
        </Button>
    );
}

export default UserLocationText;
