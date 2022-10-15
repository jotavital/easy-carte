import { Grid, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function QuantityPicker({ handleIncrement, handleDecrement, value }) {
    return (
        <>
            <IconButton size="small" onClick={handleDecrement}>
                <RemoveIcon />
            </IconButton>
            <Grid item xs={2}>
                <TextField variant="outlined" value={value} size="small" />
            </Grid>
            <IconButton size="small" onClick={handleIncrement}>
                <AddIcon />
            </IconButton>
        </>
    );
}

export default QuantityPicker;
