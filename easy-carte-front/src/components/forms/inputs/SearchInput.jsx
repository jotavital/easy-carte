import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput() {
    return (
        <TextField
            label="Onde você vai comer hoje?"
            fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchInput;