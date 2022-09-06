import { Grid, Button } from "@mui/material";

function CustomButton({
    text,
    color = 'success',
    justifyContent = 'center',
    variant = 'contained',
    type = 'button',
    onClick = null
}) {
    return (
        <Grid container justifyContent={justifyContent}>
            <Button
                variant={variant}
                color={color}
                type={type}
                onClick={onClick}
            >
                {text}
            </Button>
        </Grid>
    );
}

export default CustomButton;