import { Grid } from "@mui/material";
import AllRestaurantsSection from "../sections/AllRestaurantsSection";
import MainWrapper from '../MainWrapper';

function Home() {
    return (
        <Grid container>
            <MainWrapper>
                <AllRestaurantsSection />
            </MainWrapper>
        </Grid>
    );
}

export default Home;