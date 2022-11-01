import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

function CardWithImage({ action, src, cardTitle, cardText }) {
    return (
        <Card sx={{ width: 300 }}>
            <CardActionArea onClick={action}>
                <CardMedia
                    component="img"
                    src={src}
                    alt={src}
                    sx={{ maxHeight: 150 }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        textAlign="center"
                        component="div"
                    >
                        {cardTitle}
                    </Typography>
                    <Typography
                        variant="body2"
                        textAlign="center"
                        color="text.secondary"
                    >
                        {cardText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardWithImage;
