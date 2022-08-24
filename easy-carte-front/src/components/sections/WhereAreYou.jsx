import { Grid } from '@mui/material';
import CardWithImage from './../cards/CardWithImage';

function WhereAreYou({ handleUserLocationChanged }) {
    return (
        <Grid padding={3} justifyContent='center' container item gap={3}>
            <CardWithImage
                action={() => handleUserLocationChanged('home')}
                src="./illustrations/house.svg"
                cardTitle="Estou em casa"
                cardText="Quero ver o cardápio dos restaurantes"
            />
            <CardWithImage
                action={() => handleUserLocationChanged('restaurant')}
                src="./illustrations/restaurant.svg"
                cardTitle="Estou no restaurante"
                cardText="Quero fazer o meu pedido"
            />
        </Grid>
    );
}

export default WhereAreYou;