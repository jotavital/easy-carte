import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function CardWithImage({ src, cardTitle, cardText, iconFontSize = 130 }) {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={src}
                    alt={src}
                    height={250}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" textAlign='center' component="div">
                        {cardTitle}
                    </Typography>
                    <Typography variant="body2" textAlign='center' color="text.secondary">
                        {cardText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardWithImage;