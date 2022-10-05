import { Grid, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

function QuantityPicker() {
    const min = 1;
    const max = 5;
    const [value, setValue] = useState(1);

    const handleIncrement = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };

    const handleDecrement = () => {
        if (value > min) {
            setValue(value - 1);
        }
    };

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
