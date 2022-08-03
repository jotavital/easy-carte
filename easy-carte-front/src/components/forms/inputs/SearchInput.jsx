import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchInput() {
    const [search, setSearch] = useState('');

    const handleInputChange = ({ target }) => {
        setSearch(target.value);
    }

    return (
        <TextField
            label="Onde você vai comer hoje?"
            fullWidth
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            value={search}
            onChange={handleInputChange}
        />
    );
}

export default SearchInput;