import { Grid } from '@mui/material';
import CardWithImage from './../cards/CardWithImage';

function WhereAreYou() {
    return (
        <Grid padding={3} justifyContent='center' container gap={3}>
            <CardWithImage src="./illustrations/house.svg" cardTitle="Estou em casa" cardText="Quero ver o cardápio dos restaurantes" />
            <CardWithImage src="./illustrations/restaurant.svg" cardTitle="Estou no restaurante" cardText="Quero fazer o meu pedido" />
        </Grid>
    );
}

export default WhereAreYou;