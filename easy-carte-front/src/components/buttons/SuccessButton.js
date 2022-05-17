import { Grid, Button } from "@mui/material";

function SuccessButton({ text }) {
    return (
        <Grid container justifyContent='center'>
            <Button variant='contained' color='success' type='submit'>{text}</Button>
        </Grid>
    );
}

export default SuccessButton;