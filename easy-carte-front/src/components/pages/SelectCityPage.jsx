import { Grid, Typography } from "@mui/material";
import SelectStateCity from "../forms/inputs/selects/SelectStateCity";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useHelpers } from "../../contexts/helpers";

function SelectCityPage() {
    const isCitySelected = useSelector((state) => state.app.isCitySelected);
    const { currentRestaurant } = useHelpers();

    if (isCitySelected) {
        const { city_url } = JSON.parse(
            localStorage.getItem("easycarte@selected_city")
        );

        return <Navigate to={`/restaurants/${city_url}`} />;
    } else {
        return (
            <Grid container justifyContent="center" paddingY={8}>
                <Grid item sm={12} xs={12} md={6}>
                    <Typography
                        variant="h6"
                        marginBottom={3}
                        textAlign="center"
                    >
                        Escolha a sua cidade para continuar!
                    </Typography>
                    <SelectStateCity />
                </Grid>
            </Grid>
        );
    }
}

export default SelectCityPage;
