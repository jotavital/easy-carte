import { Grid } from "@mui/material";

function Image({ src, alt = "Imagem", title, wrapperClass = "" }) {
    return (
        <Grid className={wrapperClass} justifyContent="center" container>
            <img
                title={title}
                src={src}
                alt={alt}
                className="img-rounded img-responsive"
            />
        </Grid>
    );
}

export default Image;
