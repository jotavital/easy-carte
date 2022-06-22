import { Grid, Typography } from "@mui/material";
import MainWrapper from '../MainWrapper';
import SelectStateCity from '../forms/inputs/selects/SelectStateCity';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function SelectCityPage() {
    const isCitySelected = useSelector(state => state.app.isCitySelected);

    if (isCitySelected) {
        const { city_url } = JSON.parse(localStorage.getItem('selected_city'));
        return (
            <Navigate to={city_url} />
        );
    } else {
        return (
            <Grid container justifyContent='center' paddingY={8}>
                <Grid item sm={12} xs={12} md={6}>
                    <Typography variant="h6" marginBottom={3} textAlign="center">
                        Escolha a sua cidade para continuar!
                    </Typography>
                    <SelectStateCity />
                </Grid>
            </Grid>
        )
    }

}

export default SelectCityPage;