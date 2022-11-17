import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchInput() {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQueryString = searchParams.get("search") ?? "";
    const [search, setSearch] = useState(searchQueryString);

    const handleInputChange = ({ target }) => {
        setSearch(target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        var newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("search", search);
        setSearchParams(newSearchParams.toString());
    };

    return (
        <form onSubmit={handleSearch}>
            <TextField
                label="Encontre restaurantes"
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
