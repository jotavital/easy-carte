import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantSearchQuery } from '../../../redux/restaurants/restaurantsSlice';

function SearchInput() {
    const restaurantSearchQuery = useSelector(state => state.restaurants.restaurantSearchQuery);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        dispatch(setRestaurantSearchQuery(event.target.value));
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
            value={restaurantSearchQuery}
            onChange={handleInputChange}
        />
    );
}

export default SearchInput;