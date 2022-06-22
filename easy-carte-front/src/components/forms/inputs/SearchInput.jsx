import { Autocomplete, TextField } from "@mui/material";

function SearchInput() {
    return (
        <Autocomplete
            fullWidth
            freeSolo
            id="search-input"
            options={top100Films.map((option) => option.label)}
            renderInput={
                (params) =>
                    <TextField
                        {...params}
                        label="Onde você quer comer hoje?"
                        size="small"
                    />
            }
        />
    );
}

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
];

export default SearchInput;