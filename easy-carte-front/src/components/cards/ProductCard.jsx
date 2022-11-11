import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import { useHelpers } from "../../contexts/helpers";

function ProductCard({ product, handleOpenModal }) {
    const { convertToBrl } = useHelpers();

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
                        <Typography textAlign="center" variant="h6">
                            {product.name}
                        </Typography>
                        <Typography textAlign="center" fontWeight="bold">
                            {convertToBrl(product.price)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default ProductCard;
