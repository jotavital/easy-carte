import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { useHelpers } from "../../contexts/helpers";
import { useRestaurants } from "../../contexts/restaurants";

function ProductCard({ product, handleOpenModal }) {
    const { convertToBrl } = useHelpers();
    const { restaurantSettings } = useRestaurants();

    return (
        <Grid padding item>
            <Card>
                <CardActionArea onClick={() => handleOpenModal(product.id)}>
                    <CardMedia
                        component="img"
                        height="100"
                        image={
                            product.main_image ?? "/img/no_picture_product.webp"
                        }
                        alt="alt"
                    />
                    <CardContent>
                        <Typography textAlign="center" fontWeight="bold">
                            {product.name}
                        </Typography>

                        {restaurantSettings.show_products_price ? (
                            <Typography textAlign="center">
                                {convertToBrl(product.price)}
                            </Typography>
                        ) : null}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProductCard;
