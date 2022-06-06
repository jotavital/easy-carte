import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

function HomeRestaurantCard({ name }) {
    return (
        <Grid item lg={2}>
            <CardActionArea>
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://static.remove.bg/remove-bg-web/6ad52d54336ad62d58e7bd1317d40fb98e377ad5/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
                        alt="green iguansa"
                    />
                    <CardContent>
                        <Typography textAlign='center' fontWeight='bold'>
                            {name}
                        </Typography>
                        <Typography textAlign='center'>
                            Promoção em
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

export default HomeRestaurantCard;