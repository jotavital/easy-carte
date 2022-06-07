import { Grid, Typography } from "@mui/material";
import HomeRestaurantsSection from "../sections/HomeRestaurantsSection";
import MainWrapper from '../MainWrapper';
import CustomButton from '../buttons/CustomButton';

function Home() {
    return (
        <Grid container>
            <MainWrapper>
                <Grid container justifyContent='center' paddingY={8}>
                    <Grid item>
                        <Typography variant="h6" marginBottom={3}>
                            Escolha a sua cidade para continuar!
                        </Typography>
                        <CustomButton text='Escolher' color='info'/>
                    </Grid>
                </Grid>
                <HomeRestaurantsSection />
            </MainWrapper>
        </Grid>
    );
}

export default Home;