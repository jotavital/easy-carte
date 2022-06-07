import { Grid, Button } from "@mui/material";

function CustomButton({ text, color = 'success', justifyContent = 'center', variant='contained', type = 'button' }) {
    return (
        <Grid container justifyContent={justifyContent}>
            <Button variant={variant} color={color} type={type}>{text}</Button>
        </Grid>
    );
}

export default CustomButton;