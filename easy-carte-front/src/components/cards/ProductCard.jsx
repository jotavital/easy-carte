import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function ProductCard() {
    const navigate = useNavigate();

    return (
        <Grid item lg={2}>
            <Card>
                <CardActionArea onClick={() => navigate('/restaurants/')}>
                    <CardMedia
                        component="img"
                        height="100"
                        image='imageproducot'
                        alt='alt'
                    />
                    <CardContent>
                        <Typography textAlign='center' variant="h6">
                            kkkkk
                        </Typography>
                        <Typography textAlign='center' fontWeight='bold'>
                            R$ 0,00
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProductCard;