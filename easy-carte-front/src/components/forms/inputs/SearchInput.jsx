import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchInput() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQueryString = searchParams.get('search') ?? '';
    const [search, setSearch] = useState(searchQueryString);

    const handleInputChange = ({ target }) => {
        setSearch(target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ search: search })
    }

    return (
        <form onSubmit={handleSearch}>
            <TextField
                label="Onde você vai comer hoje?"
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                value={search}
                onChange={handleInputChange}
                onBlur={handleSearch}
            />
        </form>
    );
}

export default SearchInput;