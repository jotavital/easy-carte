import { Grid, Typography } from "@mui/material";
import MainWrapper from '../MainWrapper';
import SelectEstados from '../forms/inputs/selects/SelectEstados';
import SelectCidades from '../forms/inputs/selects/SelectCidades';

function Home() {
    return (
        <Grid container>
            <MainWrapper>
                <Grid container justifyContent='center' paddingY={8}>
                    <Grid item sm={12} xs={12} md={6}>
                        <Typography variant="h6" marginBottom={3} textAlign="center">
                            Escolha a sua cidade para continuar!
                        </Typography>
                        <Grid item container spacing={1} xs={12}>
                            <Grid item xs={6}>
                                <SelectEstados />
                            </Grid>
                            <Grid item xs={6}>
                                <SelectCidades />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainWrapper>
        </Grid>
    );
}

export default Home;