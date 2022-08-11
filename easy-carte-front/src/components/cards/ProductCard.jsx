import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
    const navigate = useNavigate();

    return (
        <Grid padding item>
            <Card>
                <CardActionArea onClick={() => navigate('/restaurants/')}>
                    <CardMedia
                        component="img"
                        height="100"
                        image={product.main_image}
                        alt='alt'
                    />
                    <CardContent>
                        <Typography textAlign='center' variant="h6">
                            {product.name}
                        </Typography>
                        <Typography textAlign='center' fontWeight='bold'>
                            {product.formatted_price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProductCard;