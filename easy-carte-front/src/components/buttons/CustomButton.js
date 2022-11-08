import { Grid, Button } from "@mui/material";

function CustomButton({
    text,
    color = "success",
    variant = "contained",
    type = "button",
    onClick = null,
    startIcon = null,
    endIcon = null
}) {
    return (
        <Grid item>
            <Button
                variant={variant}
                color={color}
                type={type}
                onClick={onClick}
                startIcon={startIcon}
                endIcon={endIcon}
            >
                {text}
            </Button>
        </Grid>
    );
}

export default CustomButton;
