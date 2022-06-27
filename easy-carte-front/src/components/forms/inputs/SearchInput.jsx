import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchInput() {
    const [searchQuery, setSearchQuery] = useState();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    }

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
            value={searchQuery}
            onChange={handleInputChange}
        />
    );
}

export default SearchInput;