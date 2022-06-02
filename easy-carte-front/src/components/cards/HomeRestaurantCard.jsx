import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function HomeRestaurantCard() {
    return (
        <Grid item lg={2}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://static.remove.bg/remove-bg-web/6ad52d54336ad62d58e7bd1317d40fb98e377ad5/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                        alt="green iguansa"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography textAlign='center' variant='h6'>
                        Restaurante 1
                    </Typography>
                    <Typography textAlign='center'>
                        Promoção em
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default HomeRestaurantCard;