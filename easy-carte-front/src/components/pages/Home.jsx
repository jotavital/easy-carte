import { Grid, Typography } from "@mui/material";
import MainWrapper from '../MainWrapper';
import SelectEstadoCidade from '../forms/inputs/selects/SelectEstadoCidade';

function Home() {
    return (
        <Grid container>
            <MainWrapper>
                <Grid container justifyContent='center' paddingY={8}>
                    <Grid item sm={12} xs={12} md={6}>
                        <Typography variant="h6" marginBottom={3} textAlign="center">
                            Escolha a sua cidade para continuar!
                        </Typography>
                        <SelectEstadoCidade />
                    </Grid>
                </Grid>
            </MainWrapper>
        </Grid>
    );
}

export default Home;