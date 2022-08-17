import { Grid } from "@mui/material";

function Image({ src, alt = 'Imagem' }) {
    return (
        <Grid justifyContent='center' container>
            <img src={src}
                alt={alt}
                className="img-rounded img-responsive"
            />
        </Grid>
    );
}

export default Image;